'use client'

import Link from 'next/link'
import { ArrowDown2 } from 'iconsax-react'
import { usePathname } from 'next/navigation'

import styles from './nav.module.scss'
function Nav() {
  const pathname = usePathname()

  interface NavItem {
    id: number
    title: string
    url: string
    children?: NavItem[]
  }
  const navList: NavItem[] = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Writing Task 1',
      url: '/writing-task-1',
      children: [
        {
          id: 3,
          title: 'Compare/Contrast',
          url: '/writing-task-1/compare-contrast',
        },
        {
          id: 4,
          title: 'Diagram',
          url: '/writing-task-1/diagram',
        },
        {
          id: 5,
          title: 'Maps',
          url: '/writing-task-1/maps',
        },
        {
          id: 6,
          title: 'Dixed',
          url: '/writing-task-1/mixed',
        },
        {
          id: 7,
          title: 'Process',
          url: '/writing-task-1/process',
        },
        {
          id: 8,
          title: 'Trends',
          url: '/writing-task-1/trends',
        },
      ],
    },
    {
      id: 9,
      title: 'Writing Task 2',
      url: '/writing-task-2',
      children: [
        {
          id: 10,
          title: 'Advantages/Disadvantages',
          url: '/writing-task-2/advantages-disadvantages',
        },
        {
          id: 11,
          title: 'Agree/Disagree',
          url: '/writing-task-2/agree-disagree',
        },
        {
          id: 12,
          title: 'Both views',
          url: '/writing-task-2/both-views',
        },
        {
          id: 13,
          title: 'Positive/Negative',
          url: '/writing-task-2/positive-negative',
        },
        {
          id: 14,
          title: 'Problems/Solutions',
          url: '/writing-task-2/problems-solutions',
        },
        {
          id: 15,
          title: 'Random Question',
          url: '/writing-task-2/random-question',
        },
        {
          id: 16,
          title: 'Reasons/Solutions',
          url: '/writing-task-2/reasons-solutions',
        },
        {
          id: 17,
          title: 'Two Parts',
          url: '/writing-task-2/two-parts',
        },
      ],
    },
    {
      id: 18,
      title: 'Easy Essays',
      url: '/easy-essays',
    },
    {
      id: 19,
      title: 'About me',
      url: '/about-me',
    },
    {
      id: 20,
      title: 'Hall of Fame',
      url: '/hall-of-fame',
    },
    {
      id: 21,
      title: 'Courses',
      url: '/courses',
    },
  ]

  return (
    <div className='flex gap-6 items-center'>
      <div className='flex gap-6'>
        {navList.map((item) => {
          const isActive = pathname === item.url

          return <MenuList key={item.id} item={item} isActive={isActive} />
        })}
      </div>
    </div>
  )
}

export default Nav

const MenuList = ({ item, isActive }: { item: any; isActive?: boolean }) => {
  const handleClose = () => {}

  return (
    <>
      <div className={`${styles.list} ${isActive && 'font-semibold'}`}>
        <Link className={styles.listTitle} href={item.url}>
          {item.title}
        </Link>
        {item?.children && (
          <>
            <div className={styles.moreIcon}>
              <ArrowDown2 size={16} />
            </div>
          </>
        )}
        {item?.children && (
          <div className={styles.lisItem}>
            {item?.children.map((item: any, index: number) => (
              <ItemMenu handleClose={handleClose} menuChildren={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
const ItemMenu = ({
  handleClose,
  menuChildren,
}: {
  handleClose: any
  menuChildren: any
}) => {
  return (
    <Link href={menuChildren.url}>
      <div className={styles.menuItem} onClick={handleClose}>
        {menuChildren.title}
      </div>
    </Link>
  )
}
