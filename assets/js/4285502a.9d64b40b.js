"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[338],{57441:e=>{e.exports=JSON.parse('{"functions":[{"name":"Controller","desc":"Creates a new controller using currying syntax.\\n\\n```lua\\nController \\"GreetController\\" { Implements.OnStart } {\\n\\t[Implements.OnStart] = function(player: Player)\\n\\t\\tprint(`Hello, {player.Name}`)\\n\\tend\\n}\\n```","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"(implements: { string | Implements }) -> (props: { [string | Implements]: (...any) -> any | props }) -> Singleton"}],"function_type":"static","realm":["Client"],"source":{"line":47,"path":"src/silicon/Modules/Singleton/Controller.lua"}},{"name":"AddController","desc":"Adds a controller to the Controller.Controllers table while running recognised implementation methods under the Controller.","params":[{"name":"controller","desc":"","lua_type":"Singleton"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"static","realm":["Client"],"source":{"line":77,"path":"src/silicon/Modules/Singleton/Controller.lua"}},{"name":"AddControllerContainer","desc":"Iterates through children of a given instance, accesses any module scripts found, and calls Controller.AddController if the module script returns a Singleton.","params":[{"name":"controllerContainer","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"static","realm":["Client"],"source":{"line":114,"path":"src/silicon/Modules/Singleton/Controller.lua"}}],"properties":[{"name":"Controllers","desc":"Contains all Controllers added by Controller.AddController (or any of its variations).","lua_type":"{ [string]: Singleton }","realm":["Client"],"source":{"line":27,"path":"src/silicon/Modules/Singleton/Controller.lua"}}],"types":[],"name":"Controller","desc":"A class derived from singletons meant for use on the Client.","realm":["Client"],"source":{"line":18,"path":"src/silicon/Modules/Singleton/Controller.lua"}}')}}]);