class HistoryCardModel {

    public title: string;
    public image: string;
    public description: Array<string>;
    public type: number;

    constructor(title: string, image: string, description: Array<string>, type: number) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.type = type;
    }

    public fromJson(data: string) {
        const dataParse = JSON.parse(data);
        this.title = dataParse.title;
        this.image = dataParse.image;
        this.description = dataParse.description;
        this.type = dataParse.type;
    }

    public toJson() {
        const data = {
            title: this.title,
            image: this.image,
            description: this.description,
            type: this.type
        };
        return JSON.stringify(data);
    }
}

export default HistoryCardModel;

