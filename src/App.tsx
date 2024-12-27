import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { MabarList } from '@/components/mabar-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect } from 'react';
import { getAllGaming } from './reducers/gamingSessionsReducer';
import { GetAllGamingSessionsParams } from './types/GamingSession';
import { useAppDispatch, useAppSelector } from './hooks';




function App() {
  const dispatch = useAppDispatch();
  const gamingSessionState = useAppSelector(state => state.gamingSessions)

  useEffect(() => {
    const params: GetAllGamingSessionsParams = { rows: 16, page: 1 };
    dispatch(getAllGaming(params));
  }, []);

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
            <MabarList mabar={gamingSessionState.sessions} />
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
