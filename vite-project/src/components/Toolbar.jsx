//Toolbar (компонент без состояния): отвечает за отображение панели с кнопками-фильтрами.
//Получает список фильтров, информацию о выбранном фильтре и функцию для обработки клика
export default function Toolbar({ filters, selected, onSelectFilter }){
    return(
        <div className="toolbar">
            {filters.map(filter =>(
                <button key={filter} className={selected === filter ? "active"  : ""} onClick={() => onSelectFilter(filter)}>
                    {filter}
                </button>
            ))}
            
        </div>
    )
}