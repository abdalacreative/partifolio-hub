// frontend/src/pages/MessagesPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import {
  Send,
  Search,
  MessageSquare,
  ArrowLeft,
  Check,
  CheckCheck,
  User,
  Sparkles,
  Phone,
  Video
} from 'lucide-react';

export const MessagesPage = () => {
  const { user: currentUser } = useAuth();
  const { showToast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const targetUserId = searchParams.get('user_id');

  const [conversations, setConversations] = useState([]);
  const [activePartner, setActivePartner] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [loadingConv, setLoadingConv] = useState(true);
  const [loadingMsgs, setLoadingMsgs] = useState(false);
  const [sending, setSending] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 1. Fetch conversations list
  const fetchConversations = async () => {
    try {
      const res = await api.getConversations();
      if (res.success && res.data) {
        const list = res.data.conversations || [];
        setConversations(list);

        // If a target user_id is in query params
        if (targetUserId) {
          const found = list.find((c) => String(c.partner_id) === String(targetUserId));
          if (found) {
            setActivePartner(found);
          } else {
            // Need to fetch target user's brief profile
            try {
              const uRes = await api.getProfile(targetUserId);
              if (uRes.success && uRes.data) {
                const u = uRes.data.user || uRes.data.profile;
                setActivePartner({
                  partner_id: u.id,
                  partner_name: u.full_name || u.username,
                  partner_username: u.username,
                  partner_avatar: u.profile_photo,
                  last_message: 'Start a new conversation',
                  unread_count: 0
                });
              }
            } catch (e) {
              console.error(e);
            }
          }
        } else if (!activePartner && list.length > 0) {
          setActivePartner(list[0]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingConv(false);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, [targetUserId]);

  // 2. Fetch messages for active partner
  useEffect(() => {
    if (!activePartner) return;

    const fetchMessages = async () => {
      setLoadingMsgs(true);
      try {
        const res = await api.getMessages({ user_id: activePartner.partner_id });
        if (res.success && res.data) {
          setMessages(res.data.messages || []);
          setTimeout(scrollToBottom, 100);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingMsgs(false);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 6000);
    return () => clearInterval(interval);
  }, [activePartner?.partner_id]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!messageText.trim() || !activePartner || sending) return;

    const textToSend = messageText.trim();
    setMessageText('');
    setSending(true);

    // Optimistic message update
    const optimisticMsg = {
      id: Date.now(),
      sender_id: currentUser?.id,
      receiver_id: activePartner.partner_id,
      message: textToSend,
      created_at: new Date().toISOString(),
      is_read: 0
    };
    setMessages((prev) => [...prev, optimisticMsg]);
    setTimeout(scrollToBottom, 50);

    try {
      const res = await api.sendMessage(activePartner.partner_id, textToSend);
      if (res.success) {
        fetchConversations();
      } else {
        showToast(res.message || 'Failed to send message', 'error');
      }
    } catch (err) {
      showToast('Error sending message', 'error');
    } finally {
      setSending(false);
    }
  };

  const filteredConversations = conversations.filter((c) =>
    (c.partner_name || c.partner_username || '').toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div style={{
      height: 'calc(100vh - 130px)',
      minHeight: '550px',
      background: '#ffffff',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-color)',
      display: 'flex',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Left Sidebar: Conversations list */}
      <div style={{
        width: '320px',
        borderRight: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        background: '#ffffff'
      }} className={`chat-list-panel ${activePartner ? 'hide-on-mobile-if-active' : ''}`}>
        {/* Search header */}
        <div style={{ padding: '16px', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '12px', color: 'var(--text-main)' }}>
            Messages
          </h2>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="input-control"
              style={{ paddingLeft: '36px', height: '38px', fontSize: '0.85rem' }}
            />
          </div>
        </div>

        {/* Conversations Scrollable */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {loadingConv ? (
            <div style={{ padding: '30px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Loading chats...
            </div>
          ) : filteredConversations.length === 0 ? (
            <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <MessageSquare size={32} color="var(--text-light)" style={{ margin: '0 auto 10px' }} />
              <p style={{ fontSize: '0.9rem' }}>No conversations yet.</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '4px' }}>
                Visit a creator's profile and click "Message" to connect!
              </p>
            </div>
          ) : (
            filteredConversations.map((c) => {
              const isActive = activePartner?.partner_id === c.partner_id;
              return (
                <div
                  key={c.partner_id}
                  onClick={() => {
                    setActivePartner(c);
                    setSearchParams({ user_id: c.partner_id });
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 16px',
                    borderBottom: '1px solid var(--border-light)',
                    cursor: 'pointer',
                    background: isActive ? 'var(--primary-light)' : 'transparent',
                    transition: 'var(--transition)'
                  }}
                >
                  <img
                    src={c.partner_avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                    alt={c.partner_name}
                    style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {c.partner_name || c.partner_username}
                      </h4>
                      {c.last_message_time && (
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                          {new Date(c.last_message_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {c.last_message}
                    </p>
                  </div>
                  {c.unread_count > 0 && (
                    <span style={{
                      minWidth: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 5px'
                    }}>
                      {c.unread_count}
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Right Chat Panel: Active conversation */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
        {activePartner ? (
          <>
            {/* Chat header */}
            <div style={{
              height: '65px',
              padding: '0 20px',
              background: '#ffffff',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={() => setActivePartner(null)}
                  className="mobile-back-to-chats"
                  style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
                >
                  <ArrowLeft size={20} />
                </button>
                <img
                  src={activePartner.partner_avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80'}
                  alt={activePartner.partner_name}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    {activePartner.partner_name || activePartner.partner_username}
                  </h3>
                  <Link
                    to={`/profile/${activePartner.partner_username}`}
                    style={{ fontSize: '0.78rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}
                  >
                    View Showcase Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {loadingMsgs ? (
                <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
                  Loading chat history...
                </div>
              ) : messages.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
                  <Sparkles size={36} color="var(--primary)" style={{ margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>
                    Say hello to {activePartner.partner_name || activePartner.partner_username}!
                  </h4>
                  <p style={{ fontSize: '0.85rem' }}>Send a direct message to collaborate on portfolios and creative projects.</p>
                </div>
              ) : (
                messages.map((m) => {
                  const isMe = String(m.sender_id) === String(currentUser?.id);
                  return (
                    <div
                      key={m.id}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isMe ? 'flex-end' : 'flex-start'
                      }}
                    >
                      <div
                        style={{
                          maxWidth: '70%',
                          padding: '12px 16px',
                          borderRadius: isMe ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                          background: isMe ? 'var(--primary-gradient)' : '#ffffff',
                          color: isMe ? '#ffffff' : 'var(--text-main)',
                          boxShadow: 'var(--shadow-sm)',
                          fontSize: '0.92rem',
                          lineHeight: '1.5',
                          wordBreak: 'break-word',
                          border: isMe ? 'none' : '1px solid var(--border-color)'
                        }}
                      >
                        {m.message}
                      </div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '4px', padding: '0 4px' }}>
                        {new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} style={{
              padding: '14px 20px',
              background: '#ffffff',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              gap: '12px',
              alignItems: 'center'
            }}>
              <input
                type="text"
                placeholder="Write your message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="input-control"
                style={{ flex: 1, borderRadius: 'var(--radius-full)' }}
              />
              <button
                type="submit"
                disabled={!messageText.trim() || sending}
                className="btn btn-primary"
                style={{ borderRadius: 'var(--radius-full)', padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Send size={16} />
                <span>Send</span>
              </button>
            </form>
          </>
        ) : (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', padding: '40px' }}>
            <MessageSquare size={54} color="var(--text-light)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '8px' }}>Your Inbox</h3>
            <p style={{ maxWidth: '360px', textAlign: 'center', fontSize: '0.9rem' }}>
              Select a conversation from the left or visit any creator's portfolio to send them a direct message.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .chat-list-panel.hide-on-mobile-if-active {
            display: none !important;
          }
          .mobile-back-to-chats {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
