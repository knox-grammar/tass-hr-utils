# tass-hr-utils

Typescript utilities for working with the TASS API

To get started…

## 1. Copy .env.defaults to .env and set to something you want to use

```
cp .env.defaults .env
```

## 2. (Assuming you already have Node.js installed…) get tsx so you can run typescript from the command line

```
npm install --global tsx
```

## 3. Run the script with

```
./employee-hr/list-employees.ts
```

You can set the target date by passing it a param

```
./employee-hr/list-employees.ts 2021-07-01

Looking at employee data for date: 2021-07-01
Employee count: 1552
First employee Citizen, Freda
```
