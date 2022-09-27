# React practice [course](https://github.com/Archakov06)

####Contents:

- **tutorial-1**: class and functional components, render data from props;
- **tutorial-2**: first form (authentication), pure JS interaction with inputs and submit button;
- **tutorial-3**: Tabs, component for each array element, only one drop-down active Tab;
- **tutorial-4**: generate random phraze application, conditional component rendering;
- **tutorial-5**: pure JS todo list with delete buttons;
- **tutorial-6**: leave comment form, material UI components, localStorage usage:
  - form submitting saves comment in localStorage;
  - render comments list below form (from most recent ones to less);
  - each comment has delete button;
  - when mounting, if localStorage has not empty comments field, initial comments list would be initialized with its value;
  - useEffect, isMountedRef usage;
- **tutorial-7**: get and create users with mockapi, upload files to express server:

  - requests with _axios_;
  - data generated with [mockapi](https://mockapi.io);
  - parsing `multipart/form-data` with [multer](https://www.npmjs.com/package/multer) or [express-fileupload](https://www.npmjs.com/package/express-fileupload) middleware and saving to `public` folder;
  - access uploaded files with `express-static` middleware;

- **multistep-registration-form**:

  - _react-hook-form_ (RHF further) with _yup_ validation;
  - `useFormContext` hook to provide inputs with _RHF_ methods;
  - _react-router-dom_ and _useNavigate_ hook;

- **react-router-blog**: multipage blog with articles and login form with simple localStorage token authorization; access `/profile` route only if signed in:

  - _react-bootstrap_ components;
  - FullArticle component renders right article by iterating `posts` array to find matching `post.id` with `id` from `useParams` hook;
  - Layout component renders children in `<Outlet>`;
  - Login component requests https://mentor.archakov.im/api with urlencoded `email` and `password` form fields; if `response.ok` our Application gets token(`serverToken`) from server and saves in localStorage;
  - received `serverToken` is also stored in Layout state (Layout component pass `setAppToken` to Login component using `useOutletContext` hook);
  - after success authorization `useNavigate` hook redirects to `/profile`;
  - Profile and Header components check if localStorage token is equil to Layout state token (`serverToken` === `AppToken`);
  - Header component renders Login/Logout button depending on `isAuth` state (`useEffect` sets it to `true` if `AppToken` === `serverToken`);
  - generate initial `AppToken` value with [uuid](https://www.npmjs.com/package/uuid) to prevent localStorage token value bruteforce (manually set `token` field in localStorage would never match with `AppToken`);

- **git-profile**: git profiles viewer with debounced auto search and success result URL:

  - requests https://api.github.com/users, component fields are filled with received data;
  - failed request sets error object; conditional rendering error message or data;
  - `fetching` state after search execution disables search button to prevent additional clicks and alters input value to `Loading...`;
  - success request add `/?login=data.login` to current URL (`window.history.replaceState` method);
  - auto-search `useEffect` checks if it's mounting (`isMounted` Ref) - if true, `searchField` value is initialized with URL searchParams login field, every `searchField` change (except changing to empty string) `setTimeout(search, 750)`; `clearTimeout` previous timer before next render;

- **useReducer**: todo list with add, delete and edit tasks, check/uncheck on completion; check/uncheck all and clear buttons; tabs with all/active/finished tasks:
  - `useReducer` hook practice;
  - material UI components;
  - _window.confirm/prompt_ confirmation;
