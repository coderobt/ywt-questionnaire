import QuestionInputConfig, { QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConfig, { QuestionTitlePropsType } from './QuestionTitle'
import QuestionParagraphConfig, { QuestionParagraphPropsType } from './QuestionParagraph'
import QuestionInfoConfig, { QuestionInfoPropsType } from './QuestionInfo'
import QuestionTextareaConfig, { QuestionTextareaPropsType } from './QuestionTextarea'
import QuestionRadioConfig, { QuestionRadioPropsType } from './QuestionRadio'

import type { FC } from 'react'

//统一,各个组件的 prop type
export type ComponentPropsType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType &
  QuestionInfoPropsType &
  QuestionTextareaPropsType &
  QuestionRadioPropsType

// 统一,组件的配置
export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

// 全部的组件配置的列表
const componentConfigList: ComponentConfigType[] = [
  QuestionInputConfig,
  QuestionTitleConfig,
  QuestionParagraphConfig,
  QuestionInfoConfig,
  QuestionTextareaConfig,
  QuestionRadioConfig,
]

// 组件分组
export const componentConfGroup = [
  {
    groupId: 'text',
    groupName: '文本显示',
    components: [QuestionInfoConfig, QuestionTitleConfig, QuestionParagraphConfig],
  },
  {
    groupId: 'input',
    groupName: '用户输入',
    components: [QuestionInputConfig, QuestionTextareaConfig],
  },
  {
    groupId: 'chooseGroup',
    groupName: '用户选择',
    components: [QuestionRadioConfig],
  },
]

export function getComponentConfByType(type: string) {
  return componentConfigList.find(item => item.type === type)
}
