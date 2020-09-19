export class HotelsDataModel {
    constructor(
        public name: string,
        public date: string,
        public city: string,
        public psCode: string,
        public address: string,
        public description: string,
        public pageUrl: string,
        public imgUrl: string
    ) { }
}