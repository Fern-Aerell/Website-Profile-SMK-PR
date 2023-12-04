class SocialMediaModel {
  public name: string;
  public link: string;
  public icon: string;
  public black_icon: string;

  constructor(name: string, link: string, icon: string, black_icon: string) {
    this.name = name;
    this.link = link;
    this.icon = icon;
    this.black_icon = black_icon;
  }

  public fromJson(data: string) {
    const dataParse = JSON.parse(data);
    this.name = dataParse.name;
    this.link = dataParse.link;
    this.icon = dataParse.icon;
    this.black_icon = dataParse.black_icon;
  }

  public toJson() {
    const data = {
      name: this.name,
      link: this.link,
      icon: this.icon,
      black_icon: this.black_icon
    };
    return JSON.stringify(data);
  }
}

export default SocialMediaModel;
