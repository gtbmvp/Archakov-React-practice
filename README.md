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
