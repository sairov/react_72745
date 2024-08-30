import BaseLayout from "./layout/BaseLayout"
import ItemList from "./components/ItemList"

function App() {
  return (
    <>
      <BaseLayout>
        <main>
          <ItemList />
        </main>
      </BaseLayout>
    </>
  )
}

export default App
