const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



//page help

client.on("message", message => {

     if(!message.channel.guild) return;

 if (message.content === "b!help") {
   message.react("<a:3333:602171235815653396>")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("<a:123:604711152328638474><a:123:604711152328638474><a:123:604711152328638474>")
  
      .addField("✵-「Help Commands")

      .addField("✺【 b!help  | To Show This Page | لعرض هذه الصفحة 】✺")

      .addField("✺【 b!helpA | To Show Help Admin | لعرض مساعدة الادمن 】✺")

      .addField("✺【 b!helpM | To Show Help Member | لعرض مساعدة الاعضاء 】✺")

      .addField("✺【 b!helpH | To Show new Commands | لعرض الاوامر الجديدة 】✺")
  
      .addField("<a:123:604711152328638474><a:123:604711152328638474><a:123:604711152328638474>")

      message.channel.sendMessage({embed});

      }
      });

     //page help 2

      client.on("message", message => {

           if(!message.channel.guild) return;

       if (message.content === "b!helpA") {
         message.react("<a:3333:602171235815653396>")
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
	    .addField("<a:123:604711152328638474>")
	
            .addField("✵-「Admin Commands")

            .addField("✺【 b!ban  | To Ban Member | لحظر عضو من السيرفر 】✺")

            .addField("✺【 b!kick | To Kick Member | لطرد عضو من االسيرفر 】✺")

            .addField("✺【 b!clear | To Clear Chat | لحذف الشات بعدد 】✺")

            .addField("✺【 b!bc  | To Send BroadCast | لارسال رسالة للجميع 】✺")

            .addField("✺【 b!createvoice | To Create Voice Room | لانشاء روم صوتي الاسم انت تختاره 】✺")

            .addField("✺【 b!createtext | To Create Text Room | لانشاء روم كتابي الاسم انت تختاره 】✺")

            .addField("✺【 b!deleteroom | To Delete Room Voice And Text | لحذف روم صوتي او كتابي 】✺")

            .addField("✺【 b!rooms | To Show All Rooms On Server  | لعرض جميع الرومات في السيرفر】✺")

            .addField("✺【 b!createrole | To Create Ranks On Server | لانشاء رتب في السيرفر 】✺")

            .addField("✺【 welcome  | يتم ترحيب عن طريق شات بأسم 】✺")
	
	    .addField("<a:123:604711152328638474>")

            message.channel.sendMessage({embed});

            }
            });

            //help page 3

            client.on("message", message => {

                 if(!message.channel.guild) return;

             if (message.content === "b!helpM") {
               message.react("<a:3333:602171235815653396>")
              const embed = new Discord.RichEmbed()
                  .setColor("RANDOM")
	          .addField("<a:123:604711152328638474>")
	      
                  .addField("✵-「Member Commands")

                  .addField("✺【 b!serverstats | To Show Stats Server | لعرض معلومات السيرفر 】✺")

                  .addField("✺【 b!serversbot | To Show Bot online on servers |لعرض البوت بكم سيرفر اونلاين  】✺")

                  .addField("✺【 b!date | To Show Date now | لعرض التاريخ الان 】✺")

                  .addField("✺【 b!ping | To Show Your Ping And Bot | لعرض سرعة اتصالك + البوت 】✺")

                  .addField("✺【 b!members | To Show Stats Member | لعرض معلومات الاعضاء 】✺")

                  .addField("✺【 b!embed | To refine speech in a box | لي يكرر الكلام في مربع 】✺")

                  .addField("✺【 b!say | To refine speech | لي يكرر الكلام 】✺")

                  .addField("✺【 b!animal | To Show animal in photo | لعرض صور الحيوانات 】✺")

                  .addField("✺【 b!minecrafthelp | To Show MineCraft Help | لعرض مساعدة ماين كرافت 】✺")

                  .addField("✺【 b!avatar | To Show Your photo Or photo Friend | لعرض صوتك او صورت غيرك 】✺")

                  .addField("✺【 b!image | To Show Server Photo | لعرض صورت السيرفر 】✺")

                  .addField("✺【 b!اقتراح | To Create suggest | لانشاء اقتراح 】✺")
	      
	          .addField("<a:123:604711152328638474>")

                  message.channel.sendMessage({embed});

                  }
                  });

      //help page 4

                  client.on("message", message => {

                       if(!message.channel.guild) return;

                   if (message.content === "b!helpH") {
                     message.react("<a:3333:602171235815653396>")
                    const embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .addField("✵-「New Commands :")
                        .addField("✺【 b!minecrafthelp | MineCraft Help | مساعدة ماين كرافت 】✺")

                        .addField("✺【 b!createroles | Create Roles | انشاء رتب 】✺")

                        .addField("✺【 b!اقتراح | Create suggest | انشاء اقتراح  】✺")

                        .addField("✺【 b!Rainbow | Create Rainbow Role | انشاء رتبة ملونة 】✺")
                    
                        .addField("✺【 b!minecraft-servers | To Show Servers On MineCraft | لعرض سيرفرات ماين كرافت】✺")

                        message.channel.sendMessage({embed});

                        }
                        });

client.on("message", message => {

     if(!message.channel.guild) return;

 if (message.content === "b!minecraft-servers") {
   message.react("<a:3333:602171235815653396>")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
  .addField("<a:123:604711152328638474>")
  
  .addField("**<a:2222:603662095791423499> | mc.hypixel.net  | #1**")

  .addField("**<a:2222:603662095791423499> | play.cubecraft.net  | #2**")
  
  .addField("**<a:2222:603662095791423499> | mineheroes.net  | #3**")
  
  .addField("<a:123:604711152328638474>")
  
  
   message.channel.sendMessage({embed});

                        }
                        });
  
                        client.on('message', message => {
                            if (message.content.startsWith("b!avatar")) {
                                var mentionned = message.mentions.users.first();
                            var x5bzm;
                              if(mentionned){
                                  var x5bzm = mentionned;
                              } else {
                                  var x5bzm = message.author;

                              }
                                const embed = new Discord.RichEmbed()
                                .setColor("RANDOM")
                                .setImage(`${x5bzm.avatarURL}`)
                              message.channel.sendEmbed(embed);
                            }
                        });

                        client.on('message', message => {
                                    if(!message.channel.guild) return;
                            if (message.content.startsWith('b!ping')) {
                                if(!message.channel.guild) return;
                                var msg = `${Date.now() - message.createdTimestamp}`
                                var api = `${Math.round(client.ping)}`
                                if (message.author.bot) return;
                            let embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username,message.author.avatarURL)
                            .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                            .setColor('RANDOM')
                            .addField('**<a:7777:603702087590739968> | BoT Ping:**',msg + " ms")
                            .addField('**<a:7777:603702087590739968> | Your Ping:**',api + " ms")
                      message.channel.send({embed:embed});
                            }
                        });

                        client.on("message", (message) => {
                        if (message.content.startsWith("b!createtext")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" ✺【 <a:123456:603970231408394260> | You Don,t Have Permission To Create Channel Text 】✺ ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'text');
                        message.channel.sendMessage('✺【 <a:3333:602171235815653396> • The Room Has Been Created • تم انشاء الروم 】✺')

                        }
                        });

                        client.on("message", (message) => {
                        if (message.content.startsWith("b!createvoice")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" ✺【 <a:123456:603970231408394260> | You Don,t Have Permission To Create Channel Voice 】✺ ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'voice');
                            message.channel.sendMessage('✺【 <a:3333:602171235815653396> • The Room Has Been Created • تم انشاء الروم 】✺')

                        }
                        });

                        client.on("message", (message) => {
                          if (message.content.startsWith('b!delete')) {
                              if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" ✺【 <a:123456:603970231408394260> | You Don,t Have Permission To Delete This Room 】✺ ");

                              let args = message.content.split(' ').slice(1);
                              let channel = message.client.channels.find('name', args.join(' '));
                              if (!channel) return message.reply('**✺【 The Room Is Not Allowed In This server. 】✺**').catch(console.error);
                              channel.delete()
                          }
                        });

                        client.on("message", message => {
                         const prefix = "b!"

                               if(!message.channel.guild) return;
                        if(message.author.bot) return;
                           if(message.content === prefix + "image"){
                               const embed = new Discord.RichEmbed()

                           .setTitle(` ✺【 Server Image : 】✺  ** ${message.guild.name} ** `)
                        .setAuthor(message.author.username, message.guild.iconrURL)
                         .setColor(0x164fe3)
                         .setImage(message.guild.iconURL)
                         .setURL(message.guild.iconrURL)
                                         .setTimestamp()

                        message.channel.send({embed});
                           }
                        });



                        client.on('message', message => {
                           if (message.content === "b!serversbot") {
                           let embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .addField("**✺【 <a:7777:603702087590739968> • Servers :  】✺**" , client.guilds.size)
                        message.channel.sendEmbed(embed);
                          }
                        });

                        var prefix = "b!";
                      var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
                          client.on('message', message => {
                              var args = message.content.split(" ").slice(1);
                          if(message.content.startsWith(prefix + 'animal')) {
                               var cat = new Discord.RichEmbed()
                      .setImage(cats[Math.floor(Math.random() * cats.length)])
                      message.channel.sendEmbed(cat);
                          }
                      });

                      client.on('message', message => {
                      var prefix = "b!";

                          if (message.author.id === client.user.id) return;
                          if (message.guild) {
                         let embed = new Discord.RichEmbed()
                          let args = message.content.split(' ').slice(1).join(' ');
                      if(message.content.split(' ')[0] == prefix + 'bc') {
                          if (!args[1]) {
                      message.channel.send("**<a:6666:603665822631723209> • Start With : b!bc <message>**");
                      return;
                      }
                              message.guild.members.forEach(m => {
                         if(!message.member.hasPermission('ADMINISTRATOR')) return;
                                  var bc = new Discord.RichEmbed()
				  .addField("<a:123:604711152328638474>")
                                  .addField("**<a:6666:603665822631723209> • New BroadCast **")
                                  .addField('***» ✠✚【 Server Name 】✚✠ :***', `${message.guild.name}`)
                                  .addField('***» ✠✚【 Sender 】✚✠ :*** ', `${message.author.username}#${message.author.discriminator}`)
                                  .addField('***» ✠✚【 Message 】✚✠ :*** ', args)
				  .addField("<a:123:604711152328638474>")
                                  .setColor('#ff0000')
                                  // m.send(`[${m}]`);
                                  m.send(`${m}`,{embed: bc});
                              });
                          }
                          } else {
                              return;
                          }
                      });

                      client.on('message', message => {
                          if (message.content === "b!serverstats") {
                              if (!message.channel.guild) return
                              var verificationLevel = message.guild.verificationLevel;
                              const verificationLevels = ['None','Low','Meduim','High','Extreme'];
                              var Y1 = message.guild.createdAt.getFullYear() - 2000
                              var M2 = message.guild.createdAt.getMonth()
                              var D3 = message.guild.createdAt.getDate()
                              const xNiTRoZ = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setColor('RANDOM')
                               .setTimestamp()
                               .setTitle(message.guild.name,message.guild.iconURL)
                               .addField(':id: ✺【 Server ID 】✺',`${message.guild.id}`,true)
                               .addField(':date: ✺【 Server Create Date 】✺',D3 + '.' + M2 + '.' + Y1,true)
                               .addField(':crown: ✺【 Owner Ship 】✺',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
                               .addField(':busts_in_silhouette: ✺【 Members 】✺' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
                               .addField(':speech_balloon: ✺【 Rooms 】✺' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
                               .addField(':earth_asia: ✺【 Server Stats 】✺',message.guild.region)
                               .addField(':ribbon: ✺【 Emoji 】✺',`${message.guild.emojis.size}`,true)
                               .addField(':construction:✺【 Level Boosting 】✺ ',`${verificationLevels[message.guild.verificationLevel]}`,true)
                               .addField(':closed_lock_with_key: ✺【 Roles 】✺ '+message.guild.roles.size+' ',)
                               message.channel.send({embed:xNiTRoZ});
                           }
                          });

                          client.on('message', message => {
                            if (message.content === "b!rooms") {
                                              if (!message.guild) return;

                                var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
                                const embed = new Discord.RichEmbed()
                                .setColor('RANDOM')
                                .addField(`${message.guild.name}`,`**Server Rooms:white_check_mark:**`)
                                .addField(':arrow_down: ✺【 Rooms Number 】✺ <a:4444:603662239257329677> ',`** ${message.guild.channels.size}**`)

                        .addField(':arrow_down: ✺【 All Rooms 】✺ <a:4444:603662239257329677> ',`**[${channels}]**`)
                                message.channel.sendEmbed(embed);
                            }
                        });

                        client.on('message', message => {
                                  if (!message.channel.guild) return;
                          if(message.content =='b!members')
                          var IzRo = new Discord.RichEmbed()
                          .setThumbnail(message.author.avatarURL)
                          .setFooter(message.author.username, message.author.avatarURL)
                          .setTitle('✺【 MEMBERS INFO 】✺ <a:3333:602171235815653396>')
                          .addBlankField(true)
                          .addField(':green_book: ✺【 ONLINE : 】✺ <a:3333:602171235815653396>',
                          `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
                          .addField(':closed_book: --) ✺【 DO NOT DISTURB 】✺<a:3333:602171235815653396>',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
                          .addField(':orange_book: --) ✺【 IDLE 】✺ <a:3333:602171235815653396>',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
                          .addField(':notebook: --) ✺【 INVISBLE 】✺ <a:3333:602171235815653396>',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
                          .addField(':two_men_holding_hands: ✺【 ALL MEMBERS 】✺ <a:3333:602171235815653396>',`${message.guild.memberCount}`)
                          message.channel.send(IzRo);
                        });


                                                  client.on("message", message => {
                                                      var prefix = "b!";
                                                              var args = message.content.substring(prefix.length).split(" ");
                                                              if (message.content.startsWith(prefix + "clear")) {
                                                   if (!args[1]) {
                                                                                  let x5bz1 = new Discord.RichEmbed()
                                                                                  .setDescription("b!clear <number>")
                                                                                  .setColor("#0000FF")
                                                                                  message.channel.sendEmbed(x5bz1);
                                                                              } else {
                                                                              let messagecount = parseInt(args[1]);
                                                                              message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                                                                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                                              message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                                              let x5bz2 = new Discord.RichEmbed()
                                                                                                              .setColor("#008000")
                                                                                  .setDescription("<a:4444:603662239257329677>  • " + args[1] + " • Message Has Been Deleted")
                                                                                                                                          message.delete("..");
                                                                                  message.channel.sendEmbed(x5bz2);
                                                                              }
                                                                            }
                                                  })
    
client.on('message', message => {
             if (!message.channel.guild) return;
      if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  
  if (command === 'invites') {
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    return message.reply(`**Hey ! Your Invites Is  : ${inviteCount}**`)

});
}});   

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '602792520824389632').setName("A");
client.channels.find('id', '602792520824389632').setName("N");
client.channels.find('id', '602792520824389632').setName("F");
client.channels.find('id', '602792520824389632').setName("R ");
client.channels.find('id', '602792520824389632').setName("E");
client.channels.find('id', '602792520824389632').setName("N");
client.channels.find('id', '602792520824389632').setName("ANFREN");
client.channels.find('id', '602792520824389632').setName("B");
client.channels.find('id', '602792520824389632').setName("O");
client.channels.find('id', '602792520824389632').setName("T");
client.channels.find('id', '602792520824389632').setName("BOT");
client.channels.find('id', '602792520824389632').setName("ANFREN BOT ");
client.channels.find('id', '602792520824389632').setName("IS");
client.channels.find('id', '602792520824389632').setName("ONLINE");
  }, 5000);
});

                                                  client.on('message', message => {
                                                       if (message.content === "b!support") {
                                                       let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username)
                                                    .setColor("#9B59B6")
                                                    .addField("<a:5555:603662381490634782> • Support Server : https://discordapp.com/invite/nsJXpZV ")
                                                    .addField("<a:7777:603702087590739968> • Owner : iTz Moh M Y#1445 ")



                                                    message.channel.sendEmbed(embed);
                                                      }
                                                  });

                                                  client.on('message', message => {
                                                       if (message.content === "b!invite") {
                                                       let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username)
                                                    .setColor("#9B59B6")
                                                    .addField("<a:5555:603662381490634782> •  Support Server : https://discordapp.com/invite/nsJXpZV ")
                                                       
                                                    .addField("<a:3333:603662179660726282> • Owner : iTz Moh M Y#1445 ")
                                                       
                                                    .addField("<a:4444:603662239257329677> • Invite BoT : https://discordapp.com/api/oauth2/authorize?client_id=602186301953015818&permissions=8&scope=bot")
                                                       
                                                    .addField("<a:7777:603702087590739968> • BOT COMMANDS : b!")



                                                    message.channel.sendEmbed(embed);
                                                      }
                                                  });

                                                  client.on('message', message => {
                                                       if (message.content === "b!minecrafthelp") {
                                                       let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username)
                                                    .setColor("#9B59B6")
						    .addField("<a:123:604711152328638474>")
						       
                                                    .addField(" **<a:2222:603662095791423499> • b!skin [name]  • To Show Your Skin On MineCraft • لعرض سكنك في ماين كرافت** ")

                                                    .addField(" **<a:2222:603662095791423499> • b!head [name]  •  To Show Your Skin Head On MineCraft • لعرض رأس سكنك في ماين كرافت** ")

                                                    .addField(" **<a:2222:603662095791423499> • b!armor [name] •  To Show Your Skin Armor On MineCraft • لعرض ثيابك في ماين كرافت**")

                                                    .addField(" **<a:2222:603662095791423499> • b!download [name] •  To Download Your Skin • لتحميل سكنك في ماين كرافت**")

						    .addField("<a:123:604711152328638474>")
							      
                                                    message.channel.sendEmbed(embed);
                                                      }
                                                  })


                                                  client.on('message', message => {
                                            if (message.content.startsWith("b!armor")) {
                                        if(!message.channel.guild) return;
                                                      let armor = message.content.split(' ').slice(1).join(' ');
                                                      if (!armor) return message.channel.send("**<a:123456:603970231408394260> • Type Your Name **");
                                                      var link = (`https://minotar.net/armor/bust/${armor}/100.png`);
                                                const embed = new Discord.RichEmbed()
                                                                   .addField('Done!', "Your McSkin Armor:")
                                                .setColor(000000)
                                                .setImage(`${link}`)
                                              message.channel.sendEmbed(embed);
                                            }
                                        });
                                        client.on('message', message => {
                                            if (message.content.startsWith("b!download")) {
                                        if(!message.channel.guild) return;
                                                      let down = message.content.split(' ').slice(1).join(' ');
                                                      if (!down) return message.channel.send("**<a:123456:603970231408394260> | Type Your name**");
                                                      var link = (`https://minotar.net/download/${down}  Download Your Skin Link • Click To Open Link :`);
                                                const embed = new Discord.RichEmbed()
                                                                   .addField('Done!', " Click This Link To Download Your Skin :")
                                                                   .addField("Click To Open Url:", `${link}`)
                                                .setColor(000000)
                                              message.channel.sendEmbed(embed);
                                            }
                                        });

                                        client.on('message', message => {
                                            if (message.content.startsWith("b!skin")) {
                                        if(!message.channel.guild) return;
                                                      let skin = message.content.split(' ').slice(1).join(' ');
                                                      if (!skin) return message.channel.send("**<a:123456:603970231408394260> • Type Your name**");
                                                      var link = (`https://minotar.net/armor/body/${skin}/100.png`);
                                                const embed = new Discord.RichEmbed()
                                                                   .addField('Done!', "Your Skin On MineCraft:")
                                                .setColor(00000)
                                                .setImage(`${link}`)
                                              message.channel.sendEmbed(embed);
                                            }
                                        });

                                        client.on('message', message => {
                                            if (message.content.startsWith("b!head")) {
                                        if(!message.channel.guild) return;
                                                      let head = message.content.split(' ').slice(1).join(' ');
                                                      if (!head) return message.channel.send("**<a:123456:603970231408394260> • Type Your name**");
                                                      var link = (`https://minotar.net/helm/${head}/100.png`);
                                                const embed = new Discord.RichEmbed()
                                                                   .addField('Done!', "Your Skin Head :")
                                                .setColor(000000)
                                                .setImage(`${link}`)
                                              message.channel.sendEmbed(embed);
                                            }
                                        });

                                        const developers = ["523954150166495255","id"]
                                        client.on('message', message => {
                                            var argresult = message.content.split(` `).slice(1).join(' ');
                                              if (!developers.includes(message.author.id)) return;

                                          if (message.content.startsWith(prefix + 'setg')) {
                                            client.user.setGame(argresult);
                                              message.channel.send(`**<a:3333:602171235815653396>   ${argresult}**`)
                                          } else
                                             if (message.content === (prefix + "leave")) {
                                            message.guild.leave();
                                          } else
                                          if (message.content.startsWith(prefix + 'setw')) {
                                          client.user.setActivity(argresult, {type:'WATCHING'});
                                              message.channel.send(`**<a:3333:602171235815653396>   ${argresult}**`)
                                          } else
                                          if (message.content.startsWith(prefix + 'setl')) {
                                          client.user.setActivity(argresult , {type:'LISTENING'});
                                              message.channel.send(`**<a:3333:602171235815653396>   ${argresult}**`)
                                          } else
                                          if (message.content.startsWith(prefix + 'sets')) {
                                            client.user.setGame(argresult, "https://www.twitch.tv/yhya17");
                                              message.channel.send(`**<a:3333:602171235815653396>**`)
                                          }
                                          if (message.content.startsWith(prefix + 'setname')) {
                                          client.user.setUsername(argresult).then
                                              message.channel.send(`Changing The Name To ..**${argresult}** `)
                                        } else
                                        if (message.content.startsWith(prefix + 'setava')) {
                                          client.user.setAvatar(argresult);
                                            message.channel.send(`Changing The Avatar To :**${argresult}** `);
                                        }
                                        });

                                        client.on('ready', function(){
                                            var ms = 10000 ;
                                            var setGame = ['b!invite','b!support'];
                                            var i = -1;
                                            var j = 0;
                                            setInterval(function (){
                                                if( i == -1 ){
                                                    j = 1;
                                                }
                                                if( i == (setGame.length)-1 ){
                                                    j = -1;
                                                }
                                                i = i+j;
                                                client.user.setGame(setGame[i],`http://www.twitch.tv/yhya17`);
                                            }, ms);
                                        console.log("==================================")
                                        console.log("1")
                                        console.log("2")
                                        console.log("3")
                                        console.log("Starting")
                                        console.log("BOT")
                                        console.log("ANFREN BOT <-- ANFREN ONLINE -->")
                                        console.log("3")
                                        console.log("2")
                                        console.log("1")
                                        console.log("====================================")
                                        });

                                        client.on('guildCreate', guild => {
  const embed = new Discord.RichEmbed()
   .setColor("GREEN")
   .setTitle(`** ✵-「Server <a:4444:603662239257329677> ANFREN BOT**`)
   .setDescription(`**
    ✵-「__Server Name__ → ${guild.name}
    ✵-「__Server Owner__ → ${guild.owner}
    ✵-「__Server ID__ → ${guild.id}
    ✵-「__Mebmers Count__ → ${guild.memberCount}
    ✵-「__Server Count__ → ${client.guilds.size}**`);
client.channels.get("602286317526581259").sendEmbed(embed)
});
client.on('guildDelete', guild => {
  const embed = new Discord.RichEmbed()
   .setColor("RED")
   .setTitle(`**✵-「Server <a:123456:603970231408394260> • ANFREN BOT`)
   .setDescription(`**
     ✵-「__Server Name__ → ${guild.name}
     ✵-「__Server Owner__ → ${guild.owner}
     ✵-「__Server ID__ → ${guild.id}
     ✵-「__Mebmers Count__ → ${guild.memberCount}
     ✵-「__Server Count__ → ${client.guilds.size}**`);
client.channels.get("602286317526581259").sendEmbed(embed)
});


client.on('message', message => {
    var prefix = "b!";
    if(message.author.bot) return;
    var name1 = message.mentions.users.first();
    var suggest = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'اقتراح')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', '✵-「suggest')) return message.channel.send('**نرجو عمل روم باسم ✵-「suggest**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**اسمك ؟**').then(msg => msg.delete(3000))
        message.delete();
    if(!suggest) return message.reply('**اكتب الاقتراح هنا .**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`**: الاقتراح الذي تم اصداره •**`)
    .addField('** : اسم المقترح •**', `${name1}`, true)
    .addField('** : اسم الروم •**', `${message.channel.name}`, true)
    .addField('** : الاقتراح •**', `${suggest}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', '✵-「suggest').sendEmbed(abod)
    message.reply('**انتظر ليتم رؤية الاقتراح**').then(msg => msg.delete(3000));
    }
});

client.on("ready", () => { // by boyka#9979
  const channel = client.channels.get("602792520824389632");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    console.log("Successfully connected.");
  }).catch(e => { // by boyka#9979
    console.error(e);
  });
});


client.on("message" , message=>{
    let args = message.content.split(' ').slice(1).join(' ');
  if(message.content.startsWith(prefix+"ascii")){

    if(!args) return message.channel.send("```please specify texts```")

    ascii.font(args, 'Doom', async txt => {
        message.channel.send(txt, {
       code: 'md'
        })
        })
        }
        })

        client.on('message', message => {//new msg event
                        if(!message.channel.guild) return;
                          if(message.content.startsWith(prefix + 'Rainbow')) {//to create the rainbow role
                              let role = message.guild.roles.find('name', 'Rainbow bot.')
                            if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
                          //start of create role
                          if(!role){
                            rainbow =  message.guild.createRole({
                           name: "Rainbow",//the role will create name
                           color: "#000000",//the default color
                           permissions:[]//the permissions
                         //end of create role
                        })

                        }
                        message.channel.send(' <a:3333:602171235815653396> • Role Has Been Created  ')//if the step completed
                        }})

                        client.on('ready', () => {//new ready event
                          setInterval(function(){
                              client.guilds.forEach(g => {
                                          var role = g.roles.find('name', 'Rainbow');//rainbow role name
                                          if (role) {
                                              role.edit({color : "RANDOM"});
                                          };
                              });
                          }, 3000);//the rainbow time
                        })

                        client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Me = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('**يوجد شخص تحدث في البوت •**')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`name :  ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("602798406787792906").send({embed:Me});
    }
});

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`:gift_heart: | ** • Hey ! Thank You For Added Me • 
• My PreFix Is : b! ** `)
        guild.owner.send(embed)
  });

  client.on('message', function(message) {
    if(message.content.startsWith("b!report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("Thanks For Reporting It!")
message.channel.send(Rembed)
message.channel.send("Click ✅ To Send This Report To __owner__ ").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
  })
  })
  }
  });

client.on('message', message => {
if (message.content.startsWith("kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("Member name");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("Done This Member Has Been Kicked : " + mention.tag);
};
});

    client.on('message', message => {
      if (message.author.x5bz) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command == "ban") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**<a:123456:603970231408394260> | You Don't Have ` BAN_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**<a:123456:603970231408394260> | I Don't Have ` BAN_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      /*let b5bzlog = client.channels.find("name", "5bz-log");
     
      if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
      if (message.mentions.users.size < 1) return message.reply("**Member name**");
      if(!reason) return message.reply ("**Reason**");
      if (!message.guild.member(user)
      .bannable) return message.reply("**<a:123456:603970231408394260> | I Can,t Ban This Member I Need  ` Top Rank  ` To Ban This Member**");
     
      message.guild.member(user).ban(7, user);
     
      const banembed = new Discord.RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User name :**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By :**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**For Reason :**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({
        embed : banembed
      })
    }
    });

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Member name :  ',`${member}`)
        .addField('Hey !' , `Welcome to the server, ${member}`)
        .addField('User ID :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField('Server :', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`نشالله ترجع تدخل`)
        .setDescription(`الله معك نشالله نلتقي مرة ثانية `)
        .addField('Members :',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`-=- Good Bay -=-`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","member")); //اسم الرتبة
    });

client.on('message' , message => {

                if (message.author.bot) return;
                if (message.content.startsWith(prefix + "WDR")) {
                if (!message.channel.guild) return;



                let args = message.content.split(" ").slice(1).join(" ");



                client.users.get("484326398568300555").send(
                    "\n" + "**" + "● Server name :" + "**" +
                    "\n" + "**" + "» " + message.guild.name + "**" +
                    "\n" + "**" + " ● Sender : " + "**" +
                    "\n" + "**" + "» " + message.author.id + "**" +
                    "\n" + "**" + " ● Message : " + "**" +
                    "\n" + "**" + args + "**")

                let embed = new Discord.RichEmbed()
                     .setAuthor(message.author.username, message.author.avatarURL)
                     .setDescription('Done | Message Has Been Sent To Owner ')
                     .setThumbnail(message.author.avatarURL)
                                                                

                message.channel.send(embed);


                }
                    
                });

lient.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// +say
  if (command === "say") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Don,t Have ` Permession ` To Use Command**' );
          message.delete()
    message.channel.sendMessage(args.join(" "))
  }
  
 

if (command == "embed") {
if(!message.channel.guild) return message.channel.send('**This Command For Server**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Don,t Have ` Permession ` To Use Command** ' );
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
    
  }



});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const xkiller = member.guild.channels.find("name", "invite");
     xkiller.send(`<@${member.user.id}> **Invited By :** <@${inviter.id}>`);
  });
});

client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**This Command For Servers*').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**Member name**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**i Don,t Have Permession** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**Please select the time**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`Mute Time : <@${tomute.id}> This Member Has Been Muted : ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **Time has ended and has been decoded Mute**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**You Don,t Have ` permession ` To UnMute This Member**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**Member name**");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**This Member Don,t Have Mute**")

  await toMute.removeRole(role)
  message.channel.sendMessage("**Done | Mute Has Been Removed From This Member**:white_check_mark:");

  return;

  }

});
client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ |You Has Been Muted From This Server')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`**  If by mistake go to the administration | اذا كان عن طريق الغلط ف اذهب الى الادارة **`)
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`, message.guild.iconURL)
        
        message.channel.send(embedP);
    }
});

client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Please Type Room Name**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **I could not find the desired Room**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **Type The Time Of GiveAway ,**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| ** `**Please Re Type The Command``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **Type The Give Away Name**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**Not specified**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('اGive Away Time End',`Won The GiveAway : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **Done**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **i Can,t Add GiveAway**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.login(process.env.BOT_TOKEN);

