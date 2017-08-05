import * as _ from 'underscore';
import {User} from "./user";
import {Location} from "./location";
import {IFeedItemResponse, IUserResponse} from "../interfaces/response.interface";
import * as moment from 'moment';

export class FeedItem {
    id: number;
    header: string;
    location: Location;
    date: string;
    time: string;
    type: string;
    imageUrl: string;
    userList: User[];

    constructor(feedItemResponse: IFeedItemResponse) {
        this.id = feedItemResponse.id;
        this.header = feedItemResponse.header;
        this.date = moment(feedItemResponse.date, 'DD-MM-YYYY').format('DD-MM-YYYY');
        this.time = moment(feedItemResponse.time, 'HH:mm').format('HH:mm');
        this.header = feedItemResponse.header;
        this.location = new Location(feedItemResponse.location);
        this.type = feedItemResponse.type;
        this.imageUrl = feedItemResponse.imageUrl;
        this.userList = [];
        _.each(feedItemResponse.userList, (user: IUserResponse) => {
            this.userList.push(new User(user));
        });
    }
}