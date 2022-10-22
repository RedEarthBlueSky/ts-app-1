import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

interface IProps {
  name: string
  age: number
  greeting: string
}

interface IFormProps<T> {
  values: T
  children: (values: T) => JSX.Element
}

const FormComponent = <T extends {}>({values, children}: IFormProps<T>) => {
  return children(values)
}

const PropsComponent: React.FC<IProps> = (
  props: IProps
  ) => {
  
  const [ state, setState ] = useState<IProps>(props)
  const { greeting, name, age } = state

  return (
    <View>
      <Text style={styles.H3Bold}>
        {greeting}, {name} {age} today?
      </Text>
      <FormComponent
        values={{ firstName: 'Ian' }}
      >
          {(values) => <Text>Hello {values.firstName}!</Text>}
      </FormComponent>
    </View>
  )
}

export { PropsComponent }

const styles = StyleSheet.create({
  H3Bold: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})