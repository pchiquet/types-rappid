// Type definitions for Rappid
// Project: http://resources.jointjs.com/docs/rappid
/// <reference types="jointjs" />

declare namespace joint {

    namespace ui {
      interface IPaperScrollerOptions extends Backbone.ViewOptions<Backbone.Model> {
        paper: joint.dia.Paper;
        autoResizePaper?: boolean;
        cursor?: string;
        padding?: number;
      }

      class PaperScroller extends Backbone.View<Backbone.Model> {
        options: IPaperScrollerOptions;
        center(x?: number, y?: number): void;
        centerContent(): void;
        centerElement(element: joint.dia.Element): void;
        getVisibleArea(): joint.dia.BBox;
        isElementVisible(element: joint.dia.Element, opt?: { strinct?: boolean; }): boolean;
        isPointVisible(point: joint.dia.Point);
        scroll(x: number, y: number, opt?: any): void;
        scrollToElement(element: joint.dia.Element, opt?: any): void;
        startPanning(evt: any, x: number, y: number): void;
        zoom(value: number, opt?: { min?: number; max?: number; }): void;
        zoomToFit(opt?: { padding?: number, minScale?: number; maxScale?: number; }): void;
      }

      interface NavigatorOptions extends Backbone.ViewOptions<Backbone.Model> {
        paperScroller: PaperScroller;
        width: number;
        height: number;
        padding: number;
        zoomOptions?: { max?: number, min?: number };
      }

      class Navigator extends Backbone.View<Backbone.Model> {
        options: NavigatorOptions;
      }

      interface StencilOptions extends Backbone.ViewOptions<Backbone.Model> {
        paper: PaperScroller|joint.dia.Paper;
        width: number;
        height: number;
        groupsToggleButtons?: boolean;
        label?: string;
        groups?: any;
        layout?: any;
        dragEndClone?: any;
      }

      class Stencil extends Backbone.View<Backbone.Model> {
        options: StencilOptions;
        loadGroup(group: joint.dia.Cell[], name: string): void;
      }

      interface HaloOptions extends Backbone.ViewOptions<Backbone.Model> {
        cellView: joint.dia.CellView;
        boxContent: boolean;
      }

      class Halo extends Backbone.View<Backbone.Model> {
        options: HaloOptions;
        static clear(paper: joint.dia.Paper): void;
        addHandle(options: any): void;
        removeHandle(name: string): void;
        changeHandle(name: string, options: any): void;
      }

      interface DialogOptions {
        width: number;
        title: string;
        content: string;
        buttons: Object;
      }

      class Dialog extends Backbone.View<Backbone.Model> {
        constructor(options: DialogOptions);
        open(): void;
        close(): void;
      }

      interface FreeTransformOptions {
        cellView: joint.dia.CellView;
        preserveAspectRatio?: boolean;
        allowRotation?: boolean;
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
      }

      class FreeTransform {
        static clear(paper: joint.dia.Paper): void;
        constructor(options: FreeTransformOptions);
        render(): any;
      }

      interface InspectorOptions extends Backbone.ViewOptions<Backbone.Model> {
        cell: joint.dia.Cell;
        cellView?: joint.dia.CellView;
        inputs?: any;
        groups?: any;
        live?: boolean;
        defaultValue?: any;
      }

      class Inspector extends Backbone.View<Backbone.Model> {
        options: InspectorOptions;
        static create(container: string, option: InspectorOptions): any;
        updateCell(): any;
        openGroups(): any;
        closeGroups(): any;
      }

      interface SelectionOptions {
        paper: joint.dia.Paper;
      }

      class Selection {
        collection: Backbone.Collection<joint.dia.Cell>;
        constructor(options: SelectionOptions);
      }

      class Keyboard {
        on(options: any): void;
        on(evt: string, callback: Function, context?: Object): void;
      }
    }

    namespace dia {
      interface CommandManagerOptions {
        graph: joint.dia.Graph;
      }

      class CommandManager {
        constructor(options: CommandManagerOptions);
        undo(): void;
        redo(): void;
        hasUndo(): boolean;
        hasRedo(): boolean;
      }
    }
}

declare module 'rappid' { export = joint; }
