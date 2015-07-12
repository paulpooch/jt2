# JuicyTracks

## Backend
Sails.js
PostgreSQL

## Mobile
react-native
realm

## Web
react
alt
react-router

# References

https://github.com/sails101/using-passport

http://miscposts1.blogspot.com/2014/09/sailsjs-user-authentication.html

http://iliketomatoes.com/implement-passport-js-authentication-with-sails-js-0-10-2/

Running with forever:

https://github.com/balderdashy/sails/issues/1334

# App Server
```
// start app server
forever start --watch app.js
```

# Database
```sql

// start db
pg_ctl -D /usr/local/var/postgres/data -l logfile start

// stop db
pg_ctl -D /usr/local/var/postgres/data -l logfile stop
```