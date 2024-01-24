'use client';
import React from 'react'

const TreeGrid = () => {
    return (
        <div style={{ height: '100vh !important', overflow: 'auto' }}>
            <div suppressHydrationWarning={true}>
                <treegrid is='treegrid' debug='check' layout_url="/Layouts/StaticDef.js" data_url="/Layouts/StaticData.js"></treegrid>
            </div>
        </div>
    )
}

export default TreeGrid