import { ReactNode } from 'react'
// import Canvas from './Canvas'
// import Card from './Card'
// import Column from './Column'

interface Props {
  children: ReactNode | ReactNode[]
}

/**
 * some desc here to be checked on the imported file root
 */
export default function Root({ children }: Props) {
  return (
    <>
      <div className="">{children}</div>
      {/* <Canvas>
      <Column title="To-do">
        <Card text="[MP][FE]" type="bug" />
        <Card text="[MP][FE] Refactor page beli dan komponen filter" type="story" />
        <Card text="[MP][FE] Refactor page beli dan komponen filter" type="task" />
        <Card text="[MP][FE] Refactor page beli dan komponen filter" type="story" />
      </Column>

      <Column title="Doing">
        <Card text="[MP][FE] Refactor page beli dan komponen filter" type="task" />
        <Card text="[MP][FE]" type="bug" />
        <Card text="[MP][FE] Refactor page beli dan komponen filter" type="story" />
        <Card text="[MP][FE] Refactor page beli dan komponen filter" type="story" />
      </Column>

      <Column title="Done">
        <Card text="[MP][FE] Refactor page beli dan komponen filter" type="story" />
        <Card text="[MP][FE]" type="task" />
        <Card text="[MP][FE] Refactor page beli dan komponen filter" type="story" />
        <Card text="[MP][FE] Refactor page beli dan komponen filter" type="bug" />
      </Column>

      <Column isSpecial />
    </Canvas> */}
    </>
  )
}
