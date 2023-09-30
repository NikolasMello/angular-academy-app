export interface NavigationItem {
    id: string;
    title: string;
    icon?: string;
    url?: string;
    active?: boolean;
  }

  export const NavigationItems: NavigationItem[] = [
    {
        id: 'nav-home',
        title: 'Dashboard',
        icon: 'feather icon-align-left',
        url: '/home'
    },
    {
        id: 'nav-cadastro',
        title: 'Cadastro',
        icon: 'feather icon-align-left',
        url: '/cadastro'
    },
    {
        id: 'nav-acoes',
        title: 'Ações',
        icon: 'feather icon-align-left',
        url: '/acoes'
    },
    {
        id: 'nav-controladora',
        title: 'Controladora',
        icon: 'feather icon-align-left',
        url: '/controladora'
    },
    {
        id: 'nav-visita',
        title: 'Visita',
        icon: 'feather icon-align-left',
        url: '/visita'
    },
    {
        id: 'nav-relatorios',
        title: 'Relatórios',
        active: false,
        icon: 'feather icon-align-left',
        url: '/relatorios'
    }
    ];
    