import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const helloWorld: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello Mike')
  },
  name: 'mca-sketch-assistant-experiment/hello-world',
  title: 'Hello there Mike',
  description: 'Reports a hello mike message',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'mca-sketch-assistant-experiment',
    rules: [helloWorld],
    config: {
      rules: {
        'mca-sketch-assistant-experiment/hello-world': { active: true },
      },
    },
  }
}

export default assistant
