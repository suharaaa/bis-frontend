export class Notice {
  private title: string;
  private content: string;
  private teachersOnly: Boolean;
  private publishedOn: Date;
  private updatedOn: Date;
  private expiresOn: Date;

  constructor(value) {
    this.title = value.title;
    this.content = value.content;
    this.teachersOnly = value.teachersOnly;
    this.publishedOn = value.publishedOn;
    this.updatedOn = value.updatedOn;
    this.expiresOn = value.expiresOn;
  }

  public get getTitle(): string {
    return this.title;
  }

  public set setTitle(title: string) {
    this.title = title;
  }

  public get getContent(): string {
    return this.content;
  }

  public set setContent(content: string) {
    this.content = content;
  }

  public get getTeachersOnly(): Boolean {
    return this.teachersOnly;
  }

  public set setTeachersOnly(teachersOnly: Boolean) {
    this.teachersOnly = teachersOnly;
  }

  public get getPublishedOn(): Date {
    return this.publishedOn;
  }

  public set setPublishedOn(publishedOn: Date) {
    this.publishedOn = publishedOn;
  }

  public get getUpdatedOn(): Date {
    return this.updatedOn;
  }

  public set setUpdatedOn(updatedOn: Date) {
    this.updatedOn = updatedOn;
  }

  public get getExpiresOn(): Date {
    return this.expiresOn;
  }

  public set setExpiresOn(expiresOn: Date) {
    this.expiresOn = expiresOn;
  }
}
