function e(e){let n=app.utils.getApiExampleURL(),r=Object.assign({collectionId:e.id,collectionName:e.name},app.utils.getDummyFieldsData(e));return t.div({pbEvent:`apiPreviewRealtime`,className:`content`},t.p(null,()=>app.tr(`Subscribe to realtime changes via Server-Sent Events (SSE).`)),t.p(null,()=>app.tr(`Events are sent for `),t.strong(null,()=>app.tr(`create`)),()=>app.tr(`, `),t.strong(null,()=>app.tr(`update`)),()=>app.tr(` and `),t.strong(null,()=>app.tr(`delete`)),()=>app.tr(` record operations (see "Event data format" below).`)),t.div({className:`alert info`},t.p({className:`txt-bold`},()=>app.tr(`You could subscribe to a single record or to an entire collection.`)),t.p(null,()=>app.tr(`When you subscribe to a `),t.strong(null,()=>app.tr(`single record`)),()=>app.tr(`, the collection's `),t.strong(null,()=>app.tr(`View rule`)),()=>app.tr(` will be used to determine whether the subscriber is allowed to receive the event message.`)),t.p(null,()=>app.tr(`When you subscribe to an `),t.strong(null,()=>app.tr(`entire collection`)),()=>app.tr(`, the collection's `),t.strong(null,()=>app.tr(`List/Search rule`)),()=>app.tr(` will be used to determine whether the subscriber is allowed to receive the event message.`))),app.components.codeBlockTabs({className:`sdk-examples m-t-sm`,historyKey:`pbLastSDK`,tabs:[{title:`JS SDK`,language:`js`,value:`
                        import PocketBase from 'pocketbase';

                        const pb = new PocketBase('${n}');

                        ...

                        // (optionally) authenticate
                        await pb.collection('users').authWithPassword('test@example.com', '123456');

                        // subscribe to changes in any ${e.name} record
                        pb.collection('${e.name}').subscribe('*', function (e) {
                            console.log(e.action);
                            console.log(e.record);
                        }, { /* other options like: filter, expand, custom headers, etc. */ });

                        // subscribe to changes only in the specified record
                        pb.collection('${e.name}').subscribe('RECORD_ID', function (e) {
                            console.log(e.action);
                            console.log(e.record);
                        }, { /* other options like: filter, expand, custom headers, etc. */ });

                        ...

                        // unsubscribe - remove all 'RECORD_ID' subscriptions
                        pb.collection('${e.name}').unsubscribe('RECORD_ID');

                        // unsubscribe - remove all '*' topic subscriptions
                        pb.collection('${e.name}').unsubscribe('*');

                        // unsubscribe - remove all collection subscriptions
                        pb.collection('${e.name}').unsubscribe();
                    `,footnote:t.div({className:`txt-right`},t.a({href:`https://github.com/pocketbase/js-sdk`,target:`_blank`,rel:`noopener noreferrer`,textContent:()=>app.tr(`JS SDK docs`)}))},{title:`Dart SDK`,language:`dart`,value:`
                        import 'package:pocketbase/pocketbase.dart';

                        final pb = PocketBase('${n}');

                        ...

                        // (optionally) authenticate
                        await pb.collection('users').authWithPassword('test@example.com', '123456');

                        // subscribe to changes in any ${e.name} record
                        pb.collection('${e.name}').subscribe('*', (e) {
                            print(e.action);
                            print(e.record);
                        }, /* other options like: filter, expand, custom headers, etc. */);

                        // subscribe to changes only in the specified record
                        pb.collection('${e.name}').subscribe('RECORD_ID', (e) {
                            print(e.action);
                            print(e.record);
                        }, /* other options like: filter, expand, custom headers, etc. */);

                        ...

                        // unsubscribe - remove all 'RECORD_ID' subscriptions
                        pb.collection('${e.name}').unsubscribe('RECORD_ID');

                        // unsubscribe - remove all '*' topic subscriptions
                        pb.collection('${e.name}').unsubscribe('*');

                        // unsubscribe - remove all collection subscriptions
                        pb.collection('${e.name}').unsubscribe();
                    `,footnote:t.div({className:`txt-right`},t.a({href:`https://github.com/pocketbase/dart-sdk`,target:`_blank`,rel:`noopener noreferrer`,textContent:()=>app.tr(`Dart SDK docs`)}))},{title:`curl`,language:`bash`,value:`
                        # init an SSE connection and start listening for messages
                        # (the first message is always PB_CONNECT with the connection "clientId")
                        curl -N '${n}/api/realtime'

                        # open a new terminal and submit the subscription topic(s)
                        # with the "clientId" from the initial PB_CONNECT message
                        curl -X POST \\
                          -H 'Authorization:TOKEN' \\
                          -H 'Content-Type:application/json' \\
                          -d '{ "clientId": "YOUR_CLIENT_ID", "subscriptions": ["${e.name}/*"] }' \\
                          '${n}/api/realtime'

                        # create/update/delete a record in the ${e.name} collection and
                        # you should see the event message(s) in the first terminal
                        # (as long as your client satisfies the topic API rule)
                    `}]}),t.div({className:`block m-t-base`},t.strong(null,()=>app.tr(`API details`))),t.div({className:`alert api-preview-alert`},t.span({className:`label method`},`GET/POST`),t.span({className:`path`},`/api/realtime`),t.div({className:`extra`},t.a({href:`https://pocketbase.io/docs/api-realtime/`,target:`_blank`,rel:`noopener noreferrer`,textContent:()=>app.tr(`Realtime docs`)}))),t.div({className:`block m-t-base m-b-sm`},t.strong(null,()=>app.tr(`Event data format`))),app.components.codeBlock({value:JSON.stringify({action:`create`,record:r},null,2).replace(`"action": "create",`,`"action": "create", // create, update or delete`)}))}export{e as docsRealtime};