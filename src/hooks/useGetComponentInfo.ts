import { useSelector } from 'react-redux'
import { StateType } from '@/store/index'
import { ComponentsStateType } from '@/store/componentsReducer/index'

function useGetComponentInfo() {
  const components = useSelector<StateType>(
    state => state.components.present,
  ) as ComponentsStateType

  const { componentList = [], selectedId, copiedComponent } = components

  const selectedComponent = componentList.find(item => item.fe_id === selectedId)

  return { componentList, selectedId, selectedComponent, copiedComponent }
}

export default useGetComponentInfo
