"use client"

import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1500, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
      }, delay)
      return () => clearInterval(interval)
    }, [delay, childrenArray.length])

    const itemsToShow = useMemo(() => {
      return childrenArray.slice(0, index + 1).reverse()
    }, [index, childrenArray])

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence initial={false}>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)
AnimatedList.displayName = "AnimatedList"

const Notification = ({ avatar, title, subtitle, time }: { avatar: string, title: string, subtitle: string, time: string }) => {
  return (
    <div
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-4',
        'transition-all duration-200 ease-in-out hover:scale-[1.02]',
        'bg-zinc-950 border border-white/5 shadow-2xl',
      )}>
      <div className='flex items-center gap-4'>
        <div className='flex-shrink-0 h-10 w-10 rounded-full overflow-hidden border border-white/10'>
          <img src={avatar} alt='User' className='h-full w-full object-cover' />
        </div>
        <div className='flex flex-col overflow-hidden'>
          <div className='flex items-center justify-between gap-2'>
            <h5 className='text-sm font-bold text-white truncate'>{title}</h5>
            <span className='text-[10px] text-gray-600 font-mono'>{time}</span>
          </div>
          <p className='text-xs font-medium text-brand-purple truncate'>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

const notifications = [
  {
    avatar: 'https://i.pravatar.cc/150?u=1',
    title: 'Novo Lead Quente!',
    subtitle: 'CEO da TechCorp solicitou contato imediato.',
    time: 'agora',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=2',
    title: 'Abandono de Carrinho',
    subtitle: 'Diretor comercial desistiu no checkout.',
    time: '1m atrás',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=3',
    title: 'Resposta no WhatsApp',
    subtitle: '"Tenho interesse, pode falar agora?"',
    time: '3m atrás',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=4',
    title: 'Lead Vindo do Meta Ads',
    subtitle: 'Perfil ICP A+. Necessidade urgente.',
    time: '5m atrás',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=5',
    title: 'Alerta de Inatividade',
    subtitle: 'Lead esfriando. Ninguém atendeu ainda.',
    time: '10m atrás',
  },
]

export function AnimatedListDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col p-6 overflow-hidden">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}
