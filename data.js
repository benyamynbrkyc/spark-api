const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic',
};

module.exports = {
  ROLE,
  users: [
    {
      id: 1,
      name: 'Benjo',
      role: ROLE.ADMIN,
    },
    {
      id: 2,
      name: 'Meri',
      role: ROLE.BASIC,
    },
    {
      id: 3,
      name: 'Berin',
      role: ROLE.BASIC,
    },
  ],
  projects: [
    {
      id: 1,
      name: 'Project Benjo',
      userId: 1,
    },
    {
      id: 2,
      name: 'Project Meri',
      userId: 2,
    },
    {
      id: 3,
      name: 'Project Berin',
      userId: 3,
    },
  ],
};
