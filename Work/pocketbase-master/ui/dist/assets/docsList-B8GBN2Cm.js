import{t as e}from"./expandInfo-CZXKwIiv.js";import{t as n}from"./fieldsInfo-Bwcd9S-A.js";function r(){let e=store({show:!1});return t.div({className:`filter-details m-t-10`},t.button({type:`button`,className:`btn secondary sm`,onclick:()=>e.show=!e.show},()=>e.show?[t.span({className:`txt`},()=>app.tr(`Hide details`)),t.i({className:`ri-arrow-up-s-line`,ariaHidden:!0})]:[t.span({className:`txt`},()=>app.tr(`Show details`)),t.i({className:`ri-arrow-down-s-line`,ariaHidden:!0})]),app.components.slide(()=>e.show,t.div({className:`block p-t-5`},t.p(null,()=>app.tr(`The filter syntax follows the format `),t.code(null,t.span({className:`txt-success`},`OPERAND`),t.span({className:`txt-danger`},` OPERATOR `),t.span({className:`txt-success`},`OPERAND`)),()=>app.tr(`, where:`)),t.ul(null,t.li(null,t.span({className:`txt-code txt-success`},`OPERAND`),()=>app.tr(` could be any of the above field literal, function, string (single or double quoted), number, null, true, false`)),t.li(null,t.span({className:`txt-code txt-danger`},`OPERATOR`),()=>app.tr(` is one of:`),t.ul(null,t.li(null,t.code({className:`filter-op`},`=`),()=>app.tr(` Equal`)),t.li(null,t.code({className:`filter-op`},`!=`),()=>app.tr(` Not equal`)),t.li(null,t.code({className:`filter-op`},`>`),()=>app.tr(` Greater than`)),t.li(null,t.code({className:`filter-op`},`>=`),()=>app.tr(` Greater than or equal`)),t.li(null,t.code({className:`filter-op`},`<`),()=>app.tr(` Less than`)),t.li(null,t.code({className:`filter-op`},`<=`),()=>app.tr(` Less than or equal`)),t.li(null,t.code({className:`filter-op`},`~`),()=>app.tr(` Like/Contains`),t.div({className:`txt-sm txt-hint`},t.em(null,()=>app.tr(`(auto wraps the right string OPERAND in a "%" for wildcard match if not explicitly set)`)))),t.li(null,t.code({className:`filter-op`},`!~`),()=>app.tr(` NOT Like/Contains`),t.div({className:`txt-sm txt-hint`},t.em(null,()=>app.tr(`(auto wraps the right string OPERAND in a "%" for wildcard match if not explicitly set)`)))),t.li(null,t.code({className:`filter-op`},`?=`),t.span({className:`txt-hint`},()=>app.tr(` Any/At-least-one-of`)),()=>app.tr(` Equal`)),t.li(null,t.code({className:`filter-op`},`?!=`),t.span({className:`txt-hint`},()=>app.tr(` Any/At-least-one-of`)),()=>app.tr(` Not equal`)),t.li(null,t.code({className:`filter-op`},`?>`),t.span({className:`txt-hint`},()=>app.tr(` Any/At-least-one-of`)),()=>app.tr(` Greater than`)),t.li(null,t.code({className:`filter-op`},`?>=`),t.span({className:`txt-hint`},()=>app.tr(` Any/At-least-one-of`)),()=>app.tr(` Greater than or equal`)),t.li(null,t.code({className:`filter-op`},`?<`),t.span({className:`txt-hint`},()=>app.tr(` Any/At-least-one-of`)),()=>app.tr(` Less than`)),t.li(null,t.code({className:`filter-op`},`?<=`),t.span({className:`txt-hint`},()=>app.tr(` Any/At-least-one-of`)),()=>app.tr(` Less than or equal`)),t.li(null,t.code({className:`filter-op`},`?~`),t.span({className:`txt-hint`},()=>app.tr(` Any/At-least-one-of`)),()=>app.tr(` Like/Contains`),t.div({className:`txt-sm txt-hint`},t.em(null,()=>app.tr(`(auto wraps the right string OPERAND in a "%" for wildcard match if not explicitly set)`)))),t.li(null,t.code({className:`filter-op`},`?!~`),t.span({className:`txt-hint`},()=>app.tr(` Any/At-least-one-of`)),()=>app.tr(` NOT Like/Contains`),t.div({className:`txt-sm txt-hint`},t.em(null,()=>app.tr(`(auto wraps the right string OPERAND in a "%" for wildcard match if not explicitly set)`))))),t.p(null,()=>app.tr(`To group and combine several expressions you could use brackets `),t.code(null,`(...)`),()=>app.tr(`, `),t.code(null,`&&`),()=>app.tr(`, (AND) and `),t.code(null,`||`),()=>app.tr(` (OR) tokens.`)))))))}function i(i){let a=app.utils.getApiExampleURL(),o=i.listRule===null,s={collectionId:i.id,collectionName:i.name},c=[{title:200,value:JSON.stringify({page:1,perPage:30,totalPages:1,totalItems:2,items:[Object.assign(s,app.utils.getDummyFieldsData(i)),Object.assign(s,app.utils.getDummyFieldsData(i))]},null,2)},{title:400,value:`
                {
                  "status": 400,
                  "message": "Something went wrong while processing your request.",
                  "data": {}
                }
            `}];return o&&c.push({title:403,value:`
                {
                  "status": 403,
                  "message": "Only superusers can access this action.",
                  "data": {}
                }
            `}),t.div({pbEvent:`apiPreviewList`,className:`content`},t.p(null,()=>app.tr(`Fetch a paginated {name} records list, supporting sorting and filtering.`,{name:i.name})),app.components.codeBlockTabs({className:`sdk-examples m-t-sm`,historyKey:`pbLastSDK`,tabs:[{title:`JS SDK`,language:`js`,value:`
                        import PocketBase from 'pocketbase';

                        const pb = new PocketBase('${a}');

                        ...

                        // fetch a paginated records list
                        const resultList = await pb.collection('${i.name}').getList(1, 50, {
                          filter: 'someField1 != someField2',
                        });

                        // you can also fetch all records at once via getFullList
                        const records = await pb.collection('${i.name}').getFullList({
                          sort: '-someField',
                        });

                        // or fetch only the first record that matches the specified filter
                        const record = await pb.collection('${i.name}').getFirstListItem(
                          'someField="test"',
                          { expand: 'relField1,relField2.subRelField' },
                        );
                    `,footnote:t.div({className:`txt-right`},t.a({href:`https://github.com/pocketbase/js-sdk`,target:`_blank`,rel:`noopener noreferrer`,textContent:()=>app.tr(`JS SDK docs`)}))},{title:`Dart SDK`,language:`dart`,value:`
                        import 'package:pocketbase/pocketbase.dart';

                        final pb = PocketBase('${a}');

                        ...

                        // fetch a paginated records list
                        final resultList = await pb.collection('${i.name}').getList(
                          page: 1,
                          perPage: 50,
                          filter: 'someField1 != someField2',
                        );

                        // you can also fetch all records at once via getFullList
                        final records = await pb.collection('${i.name}').getFullList(
                          sort: '-someField',
                        );

                        // or fetch only the first record that matches the specified filter
                        final record = await pb.collection('${i.name}').getFirstListItem(
                          'someField="test"',
                          expand: 'relField1,relField2.subRelField',
                        );
                    `,footnote:t.div({className:`txt-right`},t.a({href:`https://github.com/pocketbase/dart-sdk`,target:`_blank`,rel:`noopener noreferrer`,textContent:()=>app.tr(`Dart SDK docs`)}))},{title:`curl`,language:`bash`,value:`
                        curl \\
                          -H 'Authorization:TOKEN' \\
                          '${a}/api/collections/${i.name}/records?perPage=50'
                    `}]}),t.div({className:`block m-t-base`},t.strong(null,()=>app.tr(`API details`))),t.div({className:`alert info api-preview-alert`},t.span({className:`label method`},`GET`),t.span({className:`path`},`/api/collections/${i.name}/records`),()=>{if(o)return t.small({className:`extra`},()=>app.tr(`Requires superuser Authorization:TOKEN header`))}),t.table({className:`api-preview-table query-params`},t.thead(null,t.tr(null,t.th({className:`min-width txt-primary`},()=>app.tr(`?query params`)),t.th({className:`min-width`},()=>app.tr(`Type`)),t.th(null,()=>app.tr(`Description`)))),t.tbody(null,t.tr(null,t.td({className:`min-width`},`page`),t.td({className:`min-width`},t.span({className:`label`},`Number`)),t.td(null,()=>app.tr(`The page (aka. offset) of the paginated list (default to 1).`))),t.tr(null,t.td({className:`min-width`},`perPage`),t.td({className:`min-width`},t.span({className:`label`},`Number`)),t.td(null,()=>app.tr(`Specify the max returned records per page (default to 30).`))),t.tr(null,t.td({className:`min-width`},`sort`),t.td({className:`min-width`},t.span({className:`label`},`String`)),t.td(null,t.p(null,()=>app.tr(`Specify the records order attribute(s).`),t.br(),()=>app.tr(`Add -/+ (default) in front of the attribute for DESC / ASC order.`)),t.p(null,()=>app.tr(`For example:`),app.components.codeBlock({value:`// DESC by created and ASC by id
?sort=-created,id`})),t.p(null,()=>app.tr(`In addition to the collection non-hidden fields, the following special sort fields could be also used: `),t.code(null,`@random`),` `,t.code({hidden:()=>i.type==`view`},`@rowid`),()=>app.tr(`.`)))),t.tr(null,t.td({className:`min-width`},`filter`),t.td({className:`min-width`},t.span({className:`label`},`String`)),t.td(null,t.p(null,()=>app.tr(`Filter the returned records. For example:`)),app.components.codeBlock({value:`?filter=(id='abc' && created>'2022-01-01')`,footnote:()=>app.tr(`All query params must be properly URL encoded (the SDKs do this automatically).`)}),r())),t.tr(null,t.td({className:`min-width`},`expand`),t.td({className:`min-width`},t.span({className:`label`},`String`)),t.td(null,e())),t.tr(null,t.td({className:`min-width`},`fields`),t.td({className:`min-width`},t.span({className:`label`},`String`)),t.td(null,n())),t.tr(null,t.td({className:`min-width`},`skipTotal`),t.td({className:`min-width`},t.span({className:`label`},`Boolean`)),t.td(null,t.p(null,()=>app.tr(`If set to `),t.code(null,`1/true`),()=>app.tr(` the total counts query will be skipped and the response fields `),t.code(null,`totalItems`),()=>app.tr(` and `),t.code(null,`totalPages`),()=>app.tr(` will have -1 value.`)),t.p(null,()=>app.tr(`This could drastically speed up the search queries when the total counters are not needed or cursor based pagination is used.`),()=>app.tr(` For optimization purposes, it is set by default in the `),t.code(null,`getFirstListItem()`),()=>app.tr(` and `),t.code(null,`getFullList()`),()=>app.tr(` SDKs methods.`)))))),t.div({className:`block m-t-base m-b-sm`},t.strong(null,()=>app.tr(`Example responses`))),app.components.codeBlockTabs({tabs:c}))}export{i as docsList};