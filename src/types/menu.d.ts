export interface MenuItem {
  id?: number
  mega_menu?: boolean
  has_dropdown?: boolean
  title?: string
  link?: string
  active?: string
  sub_menus?: SubMenuItem[]
}

export interface SubMenuItem {
  title?: string
  link?: string
}
