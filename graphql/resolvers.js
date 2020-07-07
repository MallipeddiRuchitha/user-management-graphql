const resolvers = {
    Query: {
      userByName: (parent, args, context, info) => {
        return context.db.users.filter((user) => user.name === args.name);
      },
      userById: (parent, args, context, info) => {
        return context.db.users.filter((user) => user.id == args.id)[0];
      },
      user: async (_, args, { dataSources }) => {
        return await dataSources.UserDataAPI.getUser(args.id);
      },
    },
    Mutation: {
      insertUser: async (_, { name, email }, { dataSources }) => {
        const user = {
          name: name,
          email: email,
        };
        return await dataSources.UserDataAPI.postUser(user);
      },
      deleteUser: async (_, { id }, { dataSources }) => {
        const response = await dataSources.UserDataAPI.deleteUser(id);
        return response;
      },
      updateUser: async (_, { id, name, email }, { dataSources }) => {
        const user = {
          id: id,
          name: name,
          email: email,
        };
        const response = await dataSources.UserDataAPI.updateUser(user);
        return response;
      },
    },
  };
  
  module.exports = resolvers;