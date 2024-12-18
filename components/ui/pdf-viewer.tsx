

import React from 'react';

import { Root, CurrentPage, ZoomOut, ZoomIn, Outline, OutlineItem, OutlineChildItems, Viewport, Pages, Page, CanvasLayer, TextLayer, AnnotationLayer } from '@fileforge/pdfreader';

//  Zooom not included - some issues here

export const Reader = ({ fileURL }: { fileURL: string }) => {
  return (
    <Root fileURL={fileURL} className="m-4 border rounded-xl overflow-hidden">
      <div className="border-b p-3 flex gap-4">
        <CurrentPage className="border bg-white rounded-md text-center py-1" />
        <div className="flex border rounded-md">
          <ZoomOut className="aspect-square block h-8 w-8">-</ZoomOut>
          {/*<Zoom className="py-1 px-2 bg-white" />*/}
          <ZoomIn className="aspect-square block h-8 w-8">+</ZoomIn>
        </div>
      </div>
      <div className="grid grid-cols-[24rem,1fr] h-[500px] overflow-hidden">
        <Outline className="border-r overflow-auto p-3">
          <OutlineItem className="block">
            <OutlineChildItems className="pl-4" />
          </OutlineItem>
        </Outline>
        <Viewport className="bg-gray-100 py-4">
          <Pages>
            <Page className="shadow-xl m-8 my-4 first:mt-8 outline outline-black/5 rounded-md overflow-hidden">
              <CanvasLayer />
              <TextLayer />
              <AnnotationLayer />
            </Page>
          </Pages>
        </Viewport>
      </div>
    </Root>
  );
};