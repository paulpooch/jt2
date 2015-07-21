# JuicyTracks

## TODO
Waterlock (http://waterlock.ninja/) based JWT auth.
Working on https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/.

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

# Error Handling

1. The server will return all errors with:
- An appropriate HTTP respknse code.
- A json object containing a string error:
```
{
  error: 'This is the error description.'
}

2. All