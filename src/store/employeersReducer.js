import { department } from "../constants/constants";
const defaultStore = {
  design: [],
  android: [],
  ios: [],
  management: [],
  analytics: [],
  qa: [],
  back_office: [],
  frontend: [],
  hr: [],
  pr: [],
  backend: [],
  support: [],
};

export const employeersReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case department.design:
      return { ...state, design: action.payload };
    case department.android:
      return { ...state, android: action.payload };
    case department.ios:
      return { ...state, ios: action.payload };
    case department.management:
      return { ...state, management: action.payload };
    case department.analytics:
      return { ...state, analytics: action.payload };
    case department.qa:
      return { ...state, qa: action.payload };
    case department.back_office:
      return { ...state, back_office: action.payload };
    case department.frontend:
      return { ...state, frontend: action.payload };
    case department.hr:
      return { ...state, hr: action.payload };
    case department.pr:
      return { ...state, pr: action.payload };
    case department.backend:
      return { ...state, backend: action.payload };
    case department.support:
      return { ...state, support: action.payload };

    default:
      return state;
  }
};
