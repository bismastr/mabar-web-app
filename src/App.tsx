import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { MabarList } from '@/components/mabar-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Tabs defaultValue="global-mabar" className="mx-10 my-10">
          <TabsList>
            <TabsTrigger value="global-mabar">Global Mabar</TabsTrigger>
            <TabsTrigger value="your-mabar">Your Mabar</TabsTrigger>
          </TabsList>
          <TabsContent value="global-mabar">
            <MabarList />
          </TabsContent>
          <TabsContent value="your-mabar">
            Work in progress
          </TabsContent>
        </Tabs>

      </main>
    </SidebarProvider>
  )
}

export default App
