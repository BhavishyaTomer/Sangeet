import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { Outlet } from 'react-router-dom'
import LeftSidePanel from './leftSidePanel'

const MainLayout = () => {
    const isMobile=false
  return (
    <div className='h-screen bg-back text-white flex flex-col'>
        <ResizablePanelGroup direction="horizontal" className=" flex flex-1 h-full overflow-hidden p-2">
            <ResizablePanel defaultSize={20} minSize={isMobile?0:10} maxSize={30}>
              <LeftSidePanel/>
            </ResizablePanel>
            <ResizableHandle className="w-1 bg-cyan-600 transition-colors rounded-lg"/>
            <ResizablePanel  minSize={isMobile?60:80} >
                <Outlet/>
            </ResizablePanel>
            <ResizableHandle className="w-1 bg-cyan-600 transition-colors rounded-lg"/>
            <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
                Right Side
            </ResizablePanel>

        </ResizablePanelGroup>
    </div>
  )
}

export default MainLayout