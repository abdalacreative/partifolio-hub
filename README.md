# PartfolioHub

PartfolioHub waa barnaamij portfolio iyo bulshada creators-ka. Frontend-ku waa React/Vite, API-guna waa PHP, xogtana MySQL/MariaDB ayaa lagu kaydiyaa.

## Waxa loo baahan yahay

- Windows iyo XAMPP oo ku rakiban `C:\xampp` (script-yada hadda jira waxay adeegsadaan waddadan).
- PHP-ga XAMPP oo leh PDO MySQL.
- MySQL/MariaDB-ga XAMPP.
- Node.js iyo npm.

## Bilaabidda project-ka

1. Ka fur folder-ka ugu weyn ee project-ka: meesha ay yaallaan `run_project.bat`, `backend`, `database`, iyo `frontend`.
2. Haddii tani tahay markii ugu horreysay ee frontend-ka la diyaarinayo, fur terminal gudaha `frontend` oo orod:

   ```powershell
   npm install
   ```

3. Hubi in xogta database-ka `partfoliohub` la diyaariyey. Haddii database cusub la samaynayo, akhri qaybta **Diyaarinta database-ka** ee hoose.
4. Laba-guji `run_project.bat`.

Launcher-ku wuxuu bilaabaa MySQL haddii aanu hore u socon, PHP API-ga `http://127.0.0.1:8000`, iyo React/Vite `http://localhost:5173`. Wuxuu browser-ka ka furaa bogga Categories. Adeegyada ku furma daaqadaha terminal-ka ha xidhin inta aad isticmaalayso.

## Diyaarinta database-ka

Backend-ku wuxuu ku xirmayaa MySQL-ga `127.0.0.1:3306`, database-ka `partfoliohub`, user-ka `root`, password-kuna madhan yahay haddii aan environment variables kale la dejin. Xogtan default-ka ahi waxay ku habboon tahay setup-ka maxalliga ah ee XAMPP oo keliya.

Haddii database cusub loo baahan yahay:

1. Ka bilow MySQL/XAMPP.
2. Fur phpMyAdmin (`http://localhost/phpmyadmin`) ama MySQL client-ka XAMPP.
3. Marka hore soo geli `database/partfoliohub.sql` si loo abuuro database-ka iyo jadwallada.
4. Dabadeed soo geli `database/seed.sql` si loogu daro categories, accounts demo, iyo xogta tusaalaha ah.

**Digniin:** `database/partfoliohub.sql` wuxuu tirtiraa oo dib u abuuraa jadwallada. Ha ku orodin database shaqaynaya oo xog muhiim ahi ku jirto. `database/init.php` wuxuu hadda raadinayaa faylasha SQL gudaha waddo khaldan (`database/database/...`); sidaas darteed u adeegso habka phpMyAdmin ee kore ilaa helper-kaas la saxo. Ha u adeegsan database shaqaynaya.

## Cinwaannada iyo gelitaanka

Bogagga dadweynaha:

- Home: `http://localhost:5173/`
- Categories: `http://localhost:5173/categories`
- Explore/Search: `http://localhost:5173/explore`
- Creators: `http://localhost:5173/creators`
- Login iyo samaysashada account: `/login` iyo `/register`

Creator-ka marka uu galo, dashboard-ku wuxuu ka heli karaa:

- Dashboard: `/dashboard`
- Profile: `/my-profile`
- Samaynta post: `/create-post`
- Posts-kaaga: `/my-posts`
- Fariimaha: `/messages`
- Ogeysiisyada: `/notifications`
- Analytics: `/analytics`
- Settings: `/settings`

Maamulka:

- Admin Login: `http://localhost:5173/admin/login`
- Admin Overview: `/admin`
- Maamulka users-ka: `/admin/users`
- Reports: `/admin/reports`

### Xogta accounts-ka demo-ga (seed data)

Accounts-kan waxaa la abuuraa marka `database/seed.sql` la soo geliyo. Haddii password-ka account la beddelay, isticmaal password-ka cusub.

| Nooca account-ka | Username | Email | Password-ka seed-ka |
|---|---|---|---|
| Admin | `admin` | `admin@partfoliohub.com` | `Admin@123456` |
| Creator demo | `abdala` | `abdala@partfoliohub.com` | `Password@123` |
| Creator demo | `yahye` | `yahye@partfoliohub.com` | `Password@123` |
| Creator demo | `mohamed` | `mohamed@partfoliohub.com` | `Password@123` |

Bogga Admin Login wuxuu aqbalaa username ama email. Accounts-ka demo-ga waxaa loogu talagalay horumarinta iyo tijaabada maxalliga ah; ha ku isticmaalin password-kan deegaan internet-ka loo bandhigay.

## Sida qaybaha u wada shaqeeyaan

1. Browser-ku wuxuu furaa React app-ka Vite ee port `5173`.
2. Codsiyada `/api/...` Vite wuxuu u gudbiyaa PHP server-ka port `8000` (`frontend/vite.config.js`).
3. PHP endpoints-ka ku jira `backend/api/` waxay xaqiijiyaan gelitaanka marka loo baahdo, kadibna waxay xogta ka akhriyaan ama ku qoraan MySQL.
4. Categories, posts, creators, likes, follows, comments, fariimaha iyo maamulka waxay ku tiirsan yihiin xogta database-ka; sawirrada iyo videos-ka project-ku badankood waxay ku jiraan `frontend/public/assets`, uploads-kuna `backend/uploads`.

## Dhibaatooyinka caadiga ah

- **Boggu ma furmayo:** hubi in Vite server-ku shaqaynayo, dabadeed fur `http://localhost:5173`.
- **API-gu wuxuu bixinayaa 500 ama xogtu ma muuqato:** hubi in MySQL iyo PHP server-ku shaqaynayaan, kadib tijaabi `test_db.bat`.
- **Category-gu waa madhan yahay:** hubi in `seed.sql` la soo geliyey iyo in posts-ku yihiin `published` oo `public` ah.
- **Admin login-ku wuu diidayaa:** xaqiiji in seed data la isticmaalay iyo in account-ka admin-ka aan password-kiisa la beddelin.
- **Joojinta adeegyada:** `stop_project.bat` wuxuu force-stop gareeyaa dhammaan `php.exe`, `node.exe`, iyo `mysqld.exe` ee kombiyuutarka; adeegyada kale ee PHP/Node/MySQL wuu saameyn karaa. Haddii aadan rabin taas, xidh daaqadaha terminal-ka ee PartfolioHub mid mid.

## Folder-yada muhiimka ah

- `frontend/src/pages/` — bogagga app-ka.
- `frontend/src/components/` — qaybaha UI-ga la wadaago.
- `frontend/src/services/api.js` — xiriirka frontend-ka iyo API-ga.
- `backend/api/` — PHP API endpoints.
- `backend/uploads/` — faylasha ay users-ku soo geliyeen.
- `database/partfoliohub.sql` — schema-ga MySQL.
- `database/seed.sql` — xogta demo-ga iyo accounts-ka tijaabada.
- `run_project.bat` — bilaabidda services-ka.
- `stop_project.bat` — joojinta services-ka.
