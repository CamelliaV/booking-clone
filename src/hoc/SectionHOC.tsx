import { motion } from 'framer-motion'
import React from 'react'
import tw from 'twin.macro'

const Container = tw(motion.section)`
  w-full  
  max-w-6xl
`
const staggerContainer: any = (delayChildren: React.FunctionComponent) => {
  return {
    hidden: {},
    show: {
      transition: {
        delayChildren: delayChildren || 0
      }
    }
  }
}
export default function SectionHOC(Component: React.FunctionComponent) {
  return () => (
    <motion.section
      style={{ width: '100%' }}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Component />
    </motion.section>
  )
}
