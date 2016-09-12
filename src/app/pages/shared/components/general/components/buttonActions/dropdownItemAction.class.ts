export class DropdownItemAction {
    constructor(
        public name: string,
        public callback: (...args: any[]) => any
        )
    { }
}