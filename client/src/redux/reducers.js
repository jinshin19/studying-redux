import { ACTIONS } from "./constants";

let lastId = 0;

export const reducers = (states = [], actions) => {
  switch (actions.type) {
    case ACTIONS.CREATE:
      return [
        ...states,
        {
          id: ++lastId,
          description: actions.payload.description,
          resolved: false,
        },
      ];

    case ACTIONS.RESOLVED:
      return states.map((d) =>
        d.id !== actions.payload.id ? d : { ...d, resolved: true }
      );

    case ACTIONS.UNRESOLVED:
      return states.map((d) =>
        d.id !== actions.payload.id ? d : { ...d, resolved: false }
      );

    case ACTIONS.DELETE:
      return states.filter((d) => d.id !== actions.payload.id);
    default:
      return states;
  }
};
