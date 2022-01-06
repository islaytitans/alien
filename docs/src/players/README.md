---
sidebar: auto
---

# Overviw

## Dice Rolls

- Base Dice: Attribute + Skill + Gear.
  - A 6 is a success. Each additional 6 can be used to do a Stunt.
- Stress Dice: Stress level
  - A 1 on a Stress Dice triggers a [Panic Roll](#panic-roll) which may cancel action
- Roll: Roll your Base Dice and Stress dice and check the result
- Pushing: If no 1s show on Stress Dice, you may add 1 STRESS LEVEL (and the associated die) then reroll all non-6s.
- Difficulty Modifiers: Adjust # of dice (Base Dice first, then Stress Dice).

### Ranged Combat Rolls

- Collect Dice
  - Attacker collects dice for Ranged Combat skill
  - Add dice for Agility stat
  - Add stress dice for stress level
  - Add bonus dice from Weapon / equipment if any
  - Add / remove dice for Range
  - Add / remove dice for Target Size
  - Add 2 dice if Aiming
  - Apply any weapon benefit
    - If Armor Peircing
      - Armor Rating of defence die reduced by half
    - If using Full Auto
      - Add 2 dice to Dice Pool
      - Increase Stress Level by 1
      - Add additional Stress Dice to Dice Pool
- Roll to hit
  - Rolled no successes
    - Push Yourself or miss
  - Rolled one or more successes
    - Attacker finds their weapon's Damage Rating
    - Spend any additional successes on [Ranged Combat Stunts](#attributes-and-skills)
    - If Full Auto
      - You can spend any additional successes on secondary targets within Short range of the primary target
      - The first success to a secondary taget inficts damage to it equal to the Damage Rating of the weapon
      - Further successes to a secondary target can be used for stunts
    - Sum up damage dealt
- Roll defence
  - Defender collects dice for their Armor Rating if any
  - Add dice for their Cover Rating if any
  - Roll defense pool
  - Reduce damage dealt by number of successes
  - Apply damage to defender
- Check Ammo
  - Attacker check if they rolled any 1s on their Stress Die
    - Their magazine is now empty and must be reloaded before firing again
    - Reduce number of full magazines in inventory

### Close Combat Rolls

- Collect Dice
  - Attacker must be Standing and at Engaged range
  - Defender declares if they are blocking
    - If unarmed can only block humans
  - Attacker collects dice for Close Combat skill
  - Add dice for Strength stat
  - Add stress dice for stress level
  - Add bonus dice from Weapon / equipment if any
  - Apply any weapon benefit
    - If Armor Peircing
      - Armor Rating of defence die reduced by half
- Roll to hit
  - Rolled no successes
    - Push Yourself or miss
  - Rolled one or more successes
    - Attacker finds their weapon's Damage Rating
    - Spend any additional successes on [Close Combat Stunts](#attributes-and-skills)
  - Sum up damage dealt
- Roll defence
  - Defender collects dice for their Armor Rating if any
  - If blocking
    - Add dice for Close Combat skill
    - Add dice for Strength stat
  - Roll defense pool
  - Reduce damage dealt by number of successes
  - Apply damage to defender

## Attributes and Skills

- Strength
  - Heavy Machinary
    - +1 to a later related roll
    - Don’t need to roll again for this exact situation
    - Half the usual time
    - Break it permanently
    - You act quietly
    - You show off
  - Stamina
    - Give one 6 to someone in the same situation
    - +1 to later related roll
    - Don’t need to roll again for this exact situation
    - You impress someone
  - Close Combat
    - Attack
      - +1 damage
      - Swap initiative card with opponent
      - Opponent drops held item or weapon
      - Pull object from target
      - Grapple opponent
      - Humanoid opponent prone
      - Humanoid opponent clinched
    - Defence
      - -1 damage
      - Counterattack: base damage only
      - Disarm attacker
- Agility
  - Mobility
    - Give one 6 to someone in similar situation
    - +1 to later related roll
    - Impress someone
  - Ranged Combat
    - +1 damage
    - Swap initiative card with opponent
    - Opponent makes Panic Roll
    - Opponent drops held item/weapon
    - Opponent prone or pushed back
    - (Autofire only) Additional target hit for base damage
  - Piloting
    - +1 to later related roll
    - You show off
- Wits
  - Observation
    - Is it coming for me?
    - Are there more of them close by?
    - How do I get in/past/away?
  - Comtech
    - +1 to a later related roll
    - Don't’ need to overcome again
    - Half the usual time
    - New/unexpected information
    - Hide your tracks
    - You show off
  - Survival
    - Give one 6 to someone in the same situation
    - +1 to later related roll
    - You impress someone
- Empathy
  - Command
    - +1 to tartget's roll to carry out order
  - Manipulation
    - Target doesn’t demand return favor
    - Does more than asked for
    - Is impressed by you; will help later
  - Medical Aid
    - Recover +1 Health points

## Combat

Once enemy is revealed stealth mode is over and combat begins.

1. Determine initative
   - do this before anyone rolls dice except for sneak attack
2. Shuffle initiative cards
3. Draw cards for every PC and NPC
   - PCs and NPCs are given card per point of speed. Humans have speed of 1
   - If more than 10 then group NPCs
   - PC can swap initiative cards at beginning or end of round
4. Round begins each participant act in ascending initiative order
5. On your act perform either
   - one slow action and one fast action
   - two fast actions
6. On another participant act you can perform a reaction
   - but this uses up your actions for this round
7. Once every participant has acted a new round begins

### Slow actions

| Actions               | Prerequiste                                     | Skill         | Description                                                                          |
| --------------------- | ----------------------------------------------- | ------------- | ------------------------------------------------------------------------------------ |
| Break grapple         | Grapped                                         | Close Combat  | Roll opposed Close Combat                                                            |
| Crawl                 | You are prone                                   | -             |
| Close combat          | -                                               | Close Combat  | See [Close Combat Rolls](#close-combat-rolls)                                        |
| Climb into space suit | Space Suit                                      | Mobility      |
| First aid             | Broken or dying victim                          | Medical Aid   | See [Medical Aid](#damage-and-healing)                                               |
| Full auto             | Firearm with Fully Automatic                    | Ranged Combat | See [Ranged Combat Rolls](#ranged-combat-rolls)                                      |
| Give orders           | Character can hear you                          | Command       | See [Command Rolls](#attributes-and-skills)                                          |
| Persuade              | Your opponent can hear you                      | Manipulation  |
| Reload                | Firearm (rolled 1 on stress dice when shooting) | -             |
| Shoot firearm         | Firearm                                         | Ranged Combat | See [Ranged Combat Rolls](#ranged-combat-rolls)                                      |
| Use Signature Item    | Use Signature Item                              | -             |
| Start engine          | Vehicle                                         | -             |
| Stop panic            | Panicking character                             | Command       | See [Command Rolls](#attributes-and-skills)                                          |
| Throw weapon          | Thrown Weapon                                   | Ranged Combat | Mod. with aiming, range, target size. Inflict damage equal to weapon's Damage Rating |

### Fast actions

| Actions                    | Prerequiste                 | Skill        | Description                                                                                                            |
| -------------------------- | --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Aim                        | Ranged Weapon               | -            |
| Block attack               | Attacked in close combat    | Close Combat | Declare before opponent's Attack Roll, [spend successes](#blocking). Cannot use if already spent all actions this turn |
| Draw weapon                | -                           | -            |
| Drive                      | Vehicle                     | Piloting     |
| Enter/exit vehicle         | Vehicle                     | -            |
| Get up                     | You are prone               | -            |
| Grab the wheel             | Vehicle                     | -            |
| Grapple attack             | You've grappled an opponent | Close Combat | Cannot be blocked                                                                                                      |
| Move through door / hatch  | -                           | -            |
| Open unlocked door / hatch | -                           | -            |
| Pick up item               | -                           | -            |
| Retreat / disengage        | Enemy at Engaged range      | Mobility     | Success move to short range. Fail move to short range but enemy gets free attack                                       |
| Run                        | No enemy at Engaged range   | -            |
| Shove                      | Enemy at Engaged range      | Close Combat | Success opponent moved to short range.                                                                                 |
| Take cover                 | Cover in same zone          | -            |
| Set overwatch              | Ranged Weapon               | -            | Hold an Ranged Attack See [Ranged Combat Rolls](#ranged-combat-rolls). You must keep your slow action to fire          |
| Use item                   | -                           | -            |

### Movement

- [Run](#fast-actions)
  - Run from one zone to a neighbouring zone or between **Short** and **Engaged** range from an enemy or PC in the same zone as you
    - Mobility roll required if moving into a Cluttered Zone
- [Crawl](#slow-actions)
  - Same as running however a Slow Action so can only do one per turn
  - Cramped zone, crawling is the only movement possible
- [Retreat](#fast-actions)
  - Must use Retreat action to move away from engaged enemy

### Blocking

- On success spend successes
  - Decrease Damage
    - decrease damage by 1 for each success spent. If no damage left enemy misses
  - Counter Attack
    - Deal damage equal to your weapon's Damage Rating. Cannot spend additional successes to increase damage of the counter attack
  - Disarm Enemy
- Unarmed Blocking
  - If unarmed can only block unarmed attacks from humans

## Synthetics

- Rolls - Cannot push skill roles or have stress die
- Panic - Do not suffer stress and never make panic roles
- Damage - Critical injury roll on Synthetic Critical Injury table Starter Set - 77p
- Repairs - Do not heal and can't repair themselves. Shift long work and a comtech roll to repair all damage and critical injuries
- Death - Don't make Death Rolls. They "die" from System Shutdown when rolled on Synthetic Critical Injury. Can use power source and Comtech roll to turn back on to communicate. Can then also repair in this state.
- Resources - Don't need air, food, water, or sleep. Immune to vacuum, cold, disease.
