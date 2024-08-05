import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState(undefined)
  const getAPIData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1"
    let result = await fetch(url)
    result = await result.json()
    setData(result)

  }
  useEffect(() => {
    getAPIData()
  }, [])
  return (
    <View>
      <Text style={{ fontSize: 30 }}>API CALL</Text>
      {
        data ?
          <View>
            <Text style={{ fontSize: 30 }}>{data.id}</Text>
            <Text style={{ fontSize: 30 }}>{data.userId}</Text>
            <Text style={{ fontSize: 25 }}>{data.title}</Text>
          </View>
          : null
      }
    </View>
  )
}

export default App
