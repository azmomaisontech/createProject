import { ProjectEnum } from "../action/type";

const initState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content: "blah blah blah ",
    },
    {
      id: "2",
      title: "collect all the stars",
      content: "blah blah blah ",
    },
    {
      id: "3",
      title: "egg hunt with me",
      content: "blah blah blah ",
    },
  ],
};
const projectReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ProjectEnum.createProject:
      console.log(action.payload);
  }
  return state;
};

export default projectReducer;
