export const apiConfig = {
    baseUrl: 'http://127.0.0.1:5000/api'
};

export const navItems = [
    {
      path:'/user/home',
      icon:'home',
      name:'Home'
    },
    {
      path:'/user/logs',
      icon:'home',
      name:'Logs'
    },
    {
      icon:'chalkboard',
      name:'Msrit',
      id:'menuItemMsrit',
      subMenu:[
        {
          path:'/user/msrit/find-student',
          icon:'search',
          name:'Find Student'
        }
      ]
    }];