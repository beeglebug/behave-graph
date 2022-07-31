## Behavior-Graph

Behavior-Graph is a standalone library that implements the concept of "behavior graphs" as a portable TypeScript library with minimal dependencies.  Behavior graphs
are expressive, deterministic, and extensible state machiness that can encode arbitrarily complex behavior.

Behavior Graphs are used extensively in game development as a visual scripting language.  For example, look at Unreal Engine Blueprints or Unity's Visual Scripting or NVIDIA Omniverse's OmniGraph behavior graphs.

This library is intended to follow industry best practices in terms of behavior-graphs and is intended to be compatible with these existing implementations in terms of capabilities.  Although behavior-graphs are always limited by their node implementatinos.

## Feature Overview

This library, while small, contains a nearly complete implementation of behavior-graphs.

### Features:
* **Customizable** While this library contains a lot of features, you do not have to expose all of them.  For example, just because this supports for-loops, does not mean you have to register that node type as being available.
* **Type Safe** This library is implemented in TypeScript and fully makes use of its type safety features.
* **Small** This is a very small library with no external dependencies.
* **Simple** This library is implemented in straight forward fashion without unnecessary complexity.

### Node Types:
* **Events** You can implement arbitrary events that start execution: Start, Tick
* **Actions** You can implement actions that trigger animations, scene scene variations, or update internal state: Log
* **Logic** You can do arithmetic, trigonometry as well as vector operations and string manipulation: Add, Subtract, Multiply, Divide, Pow, Exp, Log, Log2, Log10, Min, Max, Round, Ceil, Floor, Sign, Abs, Trunc, Sqrt, Negate, And, Or, Not, ==, >, >=, <, <=, isNan, isInfinity, concat, includes.
* **Queries** You can query state from the system.
* **Flow Control** Control execution flow using familiar structures: Branches, delays, if-then, sequences and for-loops.
* **State** You can set and load state arbitrarily: Exists, Set, Get.

### Designed for Integration into Other Systems

This library is designed to be extended with context dependent nodes, specifically Actions, Events and Queries that match the capabilities and requirements of your system.  For example, if you integrate into a 3D engine, you can query for player state or 3D positions of your scene graph, set scene graph properties and also react to overlaps, and player movements.  Or if you want to integrate into an AR system, you can react to face-detected, tracking lost.
## Examples

Here are some example graphs in their native JSON form:

### Hello World

Print out the text "Hello World!" as soon as the graph starts up!

```json
[
    {
        "type": "event/start"
    },
    {
        "type": "action/log",
        "inputs": {
            "flow": { "links": [ { "nodeIndex": 0, "socketName": "flow" } ] },
            "text": { "value": "Hello World!" }
        }
    }
]
```

## Command Line Usage
### Building

After cloning out this git project locally, run the following:

```zsh
npm install
npm run build
```

### Running Examples

The example behavior graphs are in the ```/examples``` folder.  You can execute these from the command line to test out how this library works.

The main syntax is this one:
```zsh
npm run exec -- ./examples/[examplename].json
```

To be more specific you can run these examples:
```zsh
npm run exec -- ./examples/hellowold.json
npm run exec -- ./examples/numberToString.json
npm run exec -- ./examples/simpleState.json
npm run exec -- ./examples/delayTest.json
```
