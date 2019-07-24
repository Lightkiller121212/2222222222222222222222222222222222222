const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

//page help

client.on("message", message => {

     if(!message.channel.guild) return;

 if (message.content === "b!help") {
   message.react("<a:3333:602171235815653396>")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("✵-「Help Commands")

      .addField("✺【 b!help  | To Show This Page | لعرض هذه الصفحة 】✺")

      .addField("✺【 b!helpA | To Show Help Admin | لعرض مساعدة الادمن 】✺")

      .addField("✺【 b!helpM | To Show Help Member | لعرض مساعدة الاعضاء 】✺")

      .addField("✺【 b!helpH | To Show new Commands | لعرض الاوامر الجديدة 】✺")

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
            .addField("✵-「Admin Commands")

            .addField("✺【 b!ban  | To Ban Member | لحظر عضو 】✺")

            .addField("✺【 b!kick | To Kick Member | لطرد عضو 】✺")

            .addField("✺【 b!clear | To Clear Chat | لحذف الشات 】✺")

            .addField("✺【 b!bc  | To Send BroadCast | لارسال رسالة للجميع 】✺")

            .addField("✺【 b!createvoice | To Create Voice Room | لانشاء روم صوتي الاسم انت تختاره 】✺")

            .addField("✺【 b!createtext | To Create Text Room | لانشاء روم كتابي الاسم انت تختاره 】✺")

            .addField("✺【 b!deleteroom | To Delete Room Voice And Text | لحذف روم صوتي او كتابي 】✺")

            .addField("✺【 b!rooms | To Show All Rooms On Server  | لعرض جميع الرومات في السيرفر】✺")

            .addField("✺【 b!createrole | To Create Ranks On Server | لانشاء رتب في السيرفر 】✺")

            .addField("✺【 welcome  | يتم ترحيب عن طريق شات بأسم 】✺")

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
                  .addField("✵-「Member Commands")

                  .addField("✺【 b!serverstats | To Show Stats Server | لعرض معلومات السيرفر 】✺")

                  .addField("✺【 b!serversbot | To Show Bot online on servers |لعرض البوت بكم سيرفر اونلاين  】✺")

                  .addField("✺【 b!date | To Show Date now | لعرض التاريخ الان 】✺")

                  .addField("✺【 b!ping | To Show Your Ping And Bot | لعرض سرعة اتصالك + البوت 】✺")

                  .addField("✺【 b!members | To Show Stats Member | لعرض معلومات الاعضاء 】✺")

                  .addField("✺【 b!embed | To refine speech in a box | لي يكرر الكلام في مربع 】✺")

                  .addField("✺【 b!say | To refine speech | لي يكرر الكلام 】✺")

                  .addField("✺【 b!animal | To Show animal in photo | لعرض صور الحيوانات 】✺")

                  .addField("✺【 b!minecraft | To Show MineCraft Help | لعرض مساعدة ماين كرافت 】✺")

                  .addField("✺【 b!avatar | To Show Your photo Or photo Friend | لعرض صوتك او صورت غيرك 】✺")

                  .addField("✺【 b!image | To Show Server Photo | لعرض صورت السيرفر 】✺")

                  .addField("✺【 b!اقتراح | To Create suggest | لانشاء اقتراح 】✺")

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
                        .addField("✺【 b!minecraft | MineCraft Help | مساعدة ماين كرافت 】✺")

                        .addField("✺【 b!createroles | Create Roles | انشاء رتب 】✺")

                        .addField("✺【 b!اقتراح | Create suggest | انشاء اقتراح  】✺")

                        .addField("✺【 b!Rainbow | Create Rainbow Role | انشاء رتبة ملونة 】✺")

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
                            .addField('**BoT Ping:**',msg + " ms")
                            .addField('**Your Ping:**',api + " ms")
                      message.channel.send({embed:embed});
                            }
                        });

                        client.on("message", (message) => {
                        if (message.content.startsWith("b!createtext")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" ✺【 You Don,t Have Permission To Create Channel Text 】✺ ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'text');
                        message.channel.sendMessage('✺【 <a:3333:602171235815653396> | The Room Has Been Created | تم انشاء الروم 】✺')

                        }
                        });

                        client.on("message", (message) => {
                        if (message.content.startsWith("b!createvoice")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" ✺【 You Don,t Have Permission To Create Channel Voice 】✺ ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'voice');
                            message.channel.sendMessage('✺【 <a:3333:602171235815653396> | The Room Has Been Created | تم انشاء الروم 】✺')

                        }
                        });

                        client.on("message", (message) => {
                          if (message.content.startsWith('b!delete')) {
                              if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" ✺【 Your Don,t Have Permission To Delete This Room 】✺ ");

                              let args = message.content.split(' ').slice(1);
                              let channel = message.client.channels.find('name', args.join(' '));
                              if (!channel) return message.reply('**✺【 The Room Is Not Allowed In This server. 】✺**').catch(console.error);
                              channel.delete()
                          }
                        });

                        var prefix = "b!";

                        client.on('message', message => {
                          if (message.author.bot) return;
                          if (!message.content.startsWith(prefix)) return;

                          let command = message.content.split(" ")[0];
                          command = command.slice(prefix.length);

                          let args = message.content.split(" ").slice(1);

                        //say
                          if (command === "say") {
                                  message.delete()
                            message.channel.sendMessage(args.join(" ")).catch(console.error);
                          }



                        if (command == "embed") {
                            let say = new Discord.RichEmbed()
                            .setDescription(args.join("  "))
                            .setColor(0x23b2d6)
                            message.channel.sendEmbed(say);
                            message.delete();
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

                        client.on('message', (message) => {
                          if (message.content.startsWith('b!kick')) {
                              var member= message.mentions.members.first();
                              member.kick().then((member) => {
                                  message.channel.send(member.displayName + ' ✺【 <a:3333:602171235815653396> | The Member Has Been Kicked Form The Server  】✺ ');
                              }).catch(() => {
                                  message.channel.send(":x:");
                              });
                          }
                        });


                        client.on('message', (message) => {
                          if (message.content.startsWith('b!ban ')) {
                            if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('✠✚【 This Command For ADMINISTRATOR 】✚✠');
                              var member= message.mentions.members.first();
                              member.ban().then((member) => {
                               message.channel.send(member.displayName + '✺【 <a:3333:602171235815653396> | The Member Has Been Banned Form The Server 】✺');
                               message.channel.send(member.displayName + '✺【 <a:3333:602171235815653396> | Thanks For Reporting It ! 】✺');
                              }).catch(() => {
                                  message.channel.send('Error :_:');
                              });
                          }
                        });



                        client.on('message', message => {
                           if (message.content === "b!serversbot") {
                           let embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .addField("**✺【 Servers :  】✺**" , client.guilds.size)
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
                      message.channel.send("**Start Witch : b!bc <message>**");
                      return;
                      }
                              message.guild.members.forEach(m => {
                         if(!message.member.hasPermission('ADMINISTRATOR')) return;
                                  var bc = new Discord.RichEmbed()
                                  .addField('***» ✠✚【 Server Name 】✚✠ :***', `${message.guild.name}`)
                                  .addField('***» ✠✚【 Sender 】✚✠ :*** ', `${message.author.username}#${message.author.discriminator}`)
                                  .addField('***» ✠✚【 Message 】✚✠ :*** ', args)
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
                                .addField(':arrow_down: ✺【 Rooms Number 】✺ <a:3333:602171235815653396> ',`** ${message.guild.channels.size}**`)

                        .addField(':arrow_down: ✺【 All Rooms 】✺ <a:3333:602171235815653396> ',`**[${channels}]**`)
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
                                                                                  .setDescription("<a:3333:602171235815653396> " + args[1] + " Message Has Been Deleted")
                                                                                                                                          message.delete("..");
                                                                                  message.channel.sendEmbed(x5bz2);
                                                                              }
                                                                            }
                                                  });


                                                  client.on('guildMemberAdd', member => {
                    var embed = new Discord.RichEmbed()
                    .setThumbnail(member.user.avatarURL)
                  .addField("***Thank You For Join Server***" ,member.user.username )
                    .setDescription('**# ``-`` __Welcome__ **')// كلام ترحيب بعضو
                    .setColor('RANDOM')
                    .setImage('https://2.top4top.net/p_1225y7yza1.gif')// صور ترحيب
                var channel =member.guild.channels.find('name', 'welcome')// اسم شات ترحيب
                if (!channel) return;
                channel.send({embed : embed});
                });

                                                  client.on('message', message => {
                                                       if (message.content === "b!support") {
                                                       let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username)
                                                    .setColor("#9B59B6")
                                                    .addField(" Support Server : https://discordapp.com/invite/nsJXpZV ")
                                                    .addField(" Owner : iTz Moh M Y#1445 ")



                                                    message.channel.sendEmbed(embed);
                                                      }
                                                  });

                                                  client.on('message', message => {
                                                       if (message.content === "b!invite") {
                                                       let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username)
                                                    .setColor("#9B59B6")
                                                    .addField(" Support Server : https://discordapp.com/invite/nsJXpZV ")
                                                    .addField(" Owner : iTz Moh M Y#1445 ")
                                                    .addField("Invite BoT : https://discordapp.com/api/oauth2/authorize?client_id=602186301953015818&permissions=8&scope=bot")



                                                    message.channel.sendEmbed(embed);
                                                      }
                                                  });

                                                  client.on('message', message => {
                                                       if (message.content === "b!minecrafthelp") {
                                                       let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username)
                                                    .setColor("#9B59B6")
                                                    .addField(" **b!skin [name]  |  To Show Your Skin On MineCraft | لعرض سكنك في ماين كرافت** ")

                                                    .addField(" **b!head [name]  |  To Show Your Skin Head On MineCraft | لعرض رأس سكنك في ماين كرافت** ")

                                                    .addField(" **b!armor [name] |  To Show Your Skin Armor On MineCraft | لعرض ثيابك في ماين كرافت**")

                                                    .addField(" **b!download [name] |  To Download Your Skin | لتحميل سكنك في ماين كرافت**")

                                                    message.channel.sendEmbed(embed);
                                                      }
                                                  })


                                                  client.on('message', message => {
                                            if (message.content.startsWith("b!armor")) {
                                        if(!message.channel.guild) return;
                                                      let armor = message.content.split(' ').slice(1).join(' ');
                                                      if (!armor) return message.channel.send("**Plez Type Your name ON MineCraft**");
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
                                                      if (!down) return message.channel.send("**Plez Type Your name ON MineCraft**");
                                                      var link = (`https://minotar.net/download/${down}  Download Your Skin Link | Click To Open Link :`);
                                                const embed = new Discord.RichEmbed()
                                                                   .addField('Done!', "Download Your Skin Link :")
                                                                   .addField("Click To Open Url:", `${link}`)
                                                .setColor(000000)
                                              message.channel.sendEmbed(embed);
                                            }
                                        });

                                        client.on('message', message => {
                                            if (message.content.startsWith("b!skin")) {
                                        if(!message.channel.guild) return;
                                                      let skin = message.content.split(' ').slice(1).join(' ');
                                                      if (!skin) return message.channel.send("**Plez Type Your name ON MineCraft**");
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
                                                      if (!head) return message.channel.send("**Plez Type Your name ON MineCraft**");
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
   .setTitle(`** ✵-「Server Added [/] ANFREN BOT**`)
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
   .setTitle(`**✵-「Server Remove [/] ANFREN BOT`)
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
    if(!name1) return message.reply('**منشن نفسك**').then(msg => msg.delete(3000))
        message.delete();
    if(!suggest) return message.reply('**😇اكتب الاقتراح😇**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`**الاقتراح**`)
    .addField('**المقترح:**', `${name1}`, true)
    .addField('**بروم:**', `${message.channel.name}`, true)
    .addField('**الاقتراح:**', `${suggest}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', '✵-「suggest').sendEmbed(abod)
    message.reply('**😎بنشوف اقتراحك😎**').then(msg => msg.delete(3000));
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
                        message.channel.send(' <a:3333:602171235815653396> | Role Has Been Created  ')//if the step completed
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
        .setTitle('**يوجد رسائل جديد فى خاص بوت ...**')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`من عند ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("602798406787792906").send({embed:Me});
    }
});

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`:gift_heart: | ** Thank You For Add BOT -} b!help  ** `)
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
message.channel.send("Click ✅ To Send Report To __owner__ ").then(msg => {
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


  client.on("message", message => {
              if(message.content.startsWith("b!تقديم")) {
          if(!message.channel.guild) return;
                  if(message.author.bot) return;
          let channel = message.guild.channels.find("name", "Ranks")
              if(!channel) return message.reply("**Plez Type [ b!room1 ] To Create Room | الرجاء كتابة !room1 لانشاء التقديم**")
              if(channel) {
              message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                m.edit( message.member + ', ** Your NAME | اسمك**' )
                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                    m1 = m1.first();
                    var name = m1.content;
                    m1.delete();
                    m.edit(message.member + ', **:timer:**').then( (m) =>{
                        m.edit( message.member + ', **Your age | عمرك**' )
                        setTimeout(() => {
                          m.delete()
                        }, 10000);
                        m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                            m2 = m2.first();
                            var age = m2.content;
                            m2.delete()
                            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                              m.edit( message.member + ', **You Have Maick | تملك مايمك جيد**' )
                              setTimeout(() => {
                                m.delete()
                              }, 10000);
                              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                  m3 = m3.first();
                                  var ask = m3.content;
                                  m3.delete();
                                  message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                    m.edit( message.member + ', **Rank Name | اسم الرتبة**' )
                                    setTimeout(() => {
                                      m.delete()
                                    }, 10000);
                                    m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                        m4 = m4.first();
                                        var ask2 = m4.content;
                                        m4.delete();
                                        message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                          m.edit( message.member + ', ** هل سوف تحترم القوانين **' )
                                          m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                              m5 = m5.first();
                                              var ask3 = m5.content;
                                              m5.delete();
                        m.edit(message.member + ', **Done | Plez Wait To Create Rank**').then( (mtime)=>{
                          setTimeout(() => {
                            let embed = new Discord.RichEmbed()
                          .setColor('RANDOM')
                          .setTitle(`**تقديم على رتبه** [__**${message.guild.name}**__]`)
                          .addField('**`الاسم`**', `${name}` , true)
                          .addField('**`العمر`**', `${age}` , true)
                          .addField('**`هل سيتفاعل ؟`**',`${ask}`)
                          .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                          .addField('**`لماذا يجب علينا قبوله|وماهى الرتبه العوزها؟`**',`${ask3}`)
                          .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                          channel.send(embed)
                          }, 2500);
                          setTimeout(() => {
                            mtime.delete()
                          }, 3000);

                    })
                  })
                  })
                })
              })
            })
          })
          })
                })
            })
          })
      }
  }
          });

          client.on('message', message=>{
              if(message.content.startsWith("b!room1")) {
              if(!message.channel.guild) return;
                  if(message.author.bot) return;
                  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                  message.guild.createChannel("التقديمات", "text").then(c =>{
                      c.overwritePermissions(message.guild.id, {
                          SEND_MESSAGES: false

                            })
                  })
      message.channel.send("**✅ تم انشاء روم التقديمات بنجاح**")
              }
              })
      client.on('message',async message => {
    let mention = message.mentions.members.first();
    let role = message.content.split(" ").slice(2).join(" ");
    let mySupport = message.guild.roles.find('name',role);
    if(message.content.startsWith("b!accept")) {
      let acRoom = message.guild.channels.find('name', 'Accept-Deny');
      if(!acRoom) return message.reply("plez Type : b!room2 To Create Room2 | الرجاء كتابة b!room2 لانشاء روم القبول والرفوض");
      if(acRoom) {
      if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
      if(!mention) return message.reply('NAME | اسم الشخص');
      if(!role) return message.reply('type role name | اسم الرتبة');
      if(!mySupport) return message.reply('This Role Is Not Allowed | هذه الرتبة غير موجودة');
      if(mention.roles.has(mySupport)) return message.reply('This Member Have Rank | هذا العضو يملك رتبة');

      mention.addRole(mySupport).then(() => {
        acRoom.send(`**Done | Rank NAME : [ ${mySupport} ] Your Name : [ ${mention} ] **`);
      });
    }
  }
  });
  client.on('message',async message => {
    let mention = message.mentions.members.first();
    if(message.content.startsWith("b!deny")) {
    if(!message.channel.guild) return;
    let acRoom = message.guild.channels.find('name', 'Accept-Deny');
    if(!acRoom) return message.reply("Plez Type : !room2 To Create Room2 | الرجاء كتابة b!room2 لانشاء روم القبول و الرفوض");
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply("NAME | اسم الشخص");

    acRoom.send(`** Sorry | نأسف ${mention} Your Rank Is Deny | الرتبة الذي طلبتها رفضت**`)
    }
  });
            client.on('message', message=>{
              if(message.content.startsWith("b!room2")) {
           if(!message.channel.guild) return;
                  if(message.author.bot) return;
                  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                  message.guild.createChannel("Accept-Deny", "text").then(c =>{
                      c.overwritePermissions(message.guild.id, {
                          SEND_MESSAGES: false

                            })
                  })
      message.channel.send("** <a:3333:602171235815653396> | Room Has Been Created **")
              }
  })

client.on("message", (message) => {
  let men = message.mentions.users.first()
 
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
 
if(message.content.startsWith(prefix + "daily")) {
  if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 200
     message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }

 
 let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 200;
fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
}
 
      });

client.login(process.env.BOT_TOKEN);

