/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import { testTokenization } from '../test/testRunner';

testTokenization('graphql', [
	// Keywords
	[{
		line: 'scalar Date',
		tokens: [
			{ startIndex: 0, type: 'keyword.gql' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'type.identifier.gql' },
		]
	}],

	// Root schema definition
	[{
		line: 'schema { query: Query, mutation: Mutation subscription: Subscription }',
		tokens: [
			{ startIndex: 0, type: "keyword.gql" },
			{ startIndex: 6, type: "" },
			{ startIndex: 7, type: "delimiter.curly.gql" },
			{ startIndex: 8, type: "" },
			{ startIndex: 9, type: "keyword.gql" }, // this should be identifier
			{ startIndex: 14, type: "operator.gql" },
			{ startIndex: 15, type: "" },
			{ startIndex: 16, type: "type.identifier.gql" },
			{ startIndex: 21, type: "delimiter.gql" },
			{ startIndex: 22, type: "" },
			{ startIndex: 23, type: "keyword.gql" }, // this should be identifier
			{ startIndex: 31, type: "operator.gql" },
			{ startIndex: 32, type: "" },
			{ startIndex: 33, type: "type.identifier.gql" },
			{ startIndex: 41, type: "" },
			{ startIndex: 42, type: "keyword.gql" }, // this should be identifier
			{ startIndex: 54, type: "operator.gql" },
			{ startIndex: 55, type: "" },
			{ startIndex: 56, type: "type.identifier.gql" },
			{ startIndex: 68, type: "" },
			{ startIndex: 69, type: "delimiter.curly.gql" },
		]
	}],

	[{
		line: `query testQuery($intValue:Int=3){value(arg:{string:"string" int:$intValue}){field1 field2}}`,
		tokens: [
			{ startIndex: 0, type: "keyword.gql" },                 // 'query'
			{ startIndex: 5, type: "" },                            // ' '
			{ startIndex: 6, type: "identifier.gql" },              // 'testQuery'
			{ startIndex: 15, type: "delimiter.parenthesis.gql" },  // '('
			{ startIndex: 16, type: "identifier.gql" },             // '$intValue'
			{ startIndex: 25, type: "operator.gql" },               // ':'
			{ startIndex: 26, type: "keyword.gql" },                // 'Int'
			{ startIndex: 29, type: "operator.gql" },               // '='
			{ startIndex: 30, type: "number.gql" },                 // '3'
			{ startIndex: 31, type: "delimiter.parenthesis.gql" },  // ')'
			{ startIndex: 32, type: "delimiter.curly.gql" },        // '{'
			{ startIndex: 33, type: "identifier.gql" },             // 'value'
			{ startIndex: 38, type: "delimiter.parenthesis.gql" },  // '('
			{ startIndex: 39, type: "identifier.gql" },             // 'arg'
			{ startIndex: 42, type: "operator.gql" },               // ':'
			{ startIndex: 43, type: "delimiter.curly.gql" },        // '{'
			{ startIndex: 44, type: "identifier.gql" },             // 'string'
			{ startIndex: 50, type: "operator.gql" },               // ':'
			{ startIndex: 51, type: "string.quote.gql" },           // '"'
			{ startIndex: 52, type: "string.gql" },                 // 'string'
			{ startIndex: 58, type: "string.quote.gql" },           // '"'
			{ startIndex: 59, type: "" },                           // ' '
			{ startIndex: 60, type: "identifier.gql" },             // 'int'
			{ startIndex: 63, type: "operator.gql" },               // ':'
			{ startIndex: 64, type: "identifier.gql" },             // '$intValue'
			{ startIndex: 73, type: "delimiter.curly.gql" },        // '}'
			{ startIndex: 74, type: "delimiter.parenthesis.gql" },  // ')'
			{ startIndex: 75, type: "delimiter.curly.gql" },        // '{'
			{ startIndex: 76, type: "identifier.gql" },             // 'field1'
			{ startIndex: 82, type: "" },                           // ' '
			{ startIndex: 83, type: "identifier.gql" },             // 'field2'
			{ startIndex: 89, type: "delimiter.curly.gql" },        // '}}'
		],
	}]

	// Comments - single line

	// Comments - range comment, single line

]);
