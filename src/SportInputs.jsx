export function SportInputs ({submit}){
    return (
        <form onSubmit={submit} className="sport-form">
            <div className="sport-form__input">
                <label htmlFor="date">Дата(ДД.ММ.ГГ)</label>
                <input type="text" name="date" />
            </div>
            <div className="sport-form__input">
                <label htmlFor="distance">Пройдено, км</label>
                <input type="text" name="distance" />
            </div>
            <button type="submit">Ок</button>
        </form>
    )
}