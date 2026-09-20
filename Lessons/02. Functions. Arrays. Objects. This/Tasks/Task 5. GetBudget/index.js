const getBudget = (people) => people.reduce((sum, { budget }) => sum + budget, 0);

export default getBudget;
