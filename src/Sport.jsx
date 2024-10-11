export function Sport ({data,del}){
    let result = data.sort((a,b)=>{return b.date>a.date})
    if(result.length !==0 && result.length !==1){
        for(let i = 0;i<result.length;i++){
            if(result[i].date === result[i-1]?.date){
                result[i].distance = Number(result[i].distance) + Number(result[i-1].distance);
                result.splice(i-1,i)
            }
        }
    }
    const element = result.map((el,id)=>{
        return(
        <div key={id} className="Sport-element">
            <div className="Sport-element__item">
                {el.date}
            </div>
            <div className="Sport-element__item">
                {el.distance}
            </div>
            <button className="item-delete" onClick={del}>
                X
            </button>
        </div>)})
    return(
        <div className="sport-window">
            <div className="sport-window__top">
                <p>Дата(ДД.ММ.ГГ)</p>
                <p>Пройдено, км</p>
                <p>Действия</p>
            </div>
            <div className="sport-window__bottom">
                {element}
            </div>
        </div>
    )
}