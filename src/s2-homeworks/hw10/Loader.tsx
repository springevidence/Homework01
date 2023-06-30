import s from './Loader.module.css'

export const Loader = () => {
    return (
        <>
            <div className={s.ldsAnimation}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}
