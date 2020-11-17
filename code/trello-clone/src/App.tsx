import React from 'react'

interface IProps {
    name: string
}

type NotePitch = "A" | "B" | "C" | "D" | "E" | "F" | "G"

type IpropsChildren = React.PropsWithChildren<IProps>

export const App: React.FC<IpropsChildren> = ({ name, children }: IpropsChildren) => {
    let a:NotePitch="D";
    return (
        <div>
            <p>{name}</p>
            <div>
                {children}
            </div>
        </div>)
}

export const Test: React.FC<IProps> = function ({ name }: IProps) {
    return <div>{name}</div>
}

function AppTest({ name }: IProps):JSX.Element{
    return <div>{name}</div>
}