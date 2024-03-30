"use client";
import React, { useEffect, useState } from 'react'
import Card from "../../components/Card"
import Filter from "../../utilities/Filter"
import Data from "../../utilities/Data"
import { getRequest } from '@/api/api';
const Gamepage = () => {

  const [Data, setData] = useState([])
  const [item, setItem] = useState(Data)
  const [filterCount, setFilterCount] = useState(0);
  const menu = [...new Set(Data.map((val) => val.category))]

  const [filters, setFilters] = useState({
    RPG: false,
    Puzzle: false,
    Racing: false,
    Fighting: false,
    Aiming: false,
    Mobile: false,
    Laptop: false,
    Quick: false,
    Heavy: false,
    '2D': false,
    '3D': false,
    Downloadable: false
  })



  const addFilters = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: true }))
    setFilterCount(filterCount + 1)
  }
  const removeFilters = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: false }))
    if (filterCount > 0) setFilterCount(filterCount - 1);
  }
  const clearAllFilters = () => {
    setFilters({
      RPG: false,
      Puzzle: false,
      Racing: false,
      Fighting: false,
      Aiming: false,
      Mobile: false,
      Laptop: false,
      Quick: false,
      Heavy: false,
      '2D': false,
      '3D': false,
      Downloadable: false
    })
    setFilterCount(0);
  }

  async function fetchData() {
    const response = await getRequest('/api/game/getallgames')
    console.log(response.games)
    setData(response.games)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const filteredGames = Data.filter((game) =>
      ((!filters.Aiming && !filters.Puzzle && !filters.Fighting && !filters.RPG && !filters.Racing) || filters[game.category]) &&
      ((!filters.Heavy && !filters.Quick) || filters[game.size]) &&
      ((!filters['2D'] && !filters['3D']) || filters[game.dimension]) &&
      ((!filters.Mobile && !filters.Laptop) || filters[game.device]) &&
      (!filters.Downloadable || game.downloadable === true)
    )

    setItem(filteredGames)
  }, [filters, Data])

  return (
    <div >
      <Filter
        menu={menu}
        // addToFilterList={{ addToCategoryFilterList, addToSizeFilterList, addToDimensionFilterList, addToDeviceFilterList, addToDownloadFilterList }}
        addToFilterList={addFilters}
        setItem={setItem}
        // removeFromFilterList={{ removeFromCategoryFilterList, removeFromDimensionFilterList, removeFromDeviceFilterList, removeFromDownloadFilterList, removeFromSizeFilterList }} />
        removeFromFilterList={removeFilters}
        clearFilters={clearAllFilters}
        filterCount={filterCount}
      />
      {

      }
      <div className='flex flex-wrap justify-center'><Card item={item} /></div>
    </div>
  )
}

export default Gamepage



