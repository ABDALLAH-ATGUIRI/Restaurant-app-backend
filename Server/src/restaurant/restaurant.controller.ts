import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/restaurent.schema';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get()
  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Post()
  async createRestaurant(
    @Body() restaurant: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.create(restaurant);
  }

  @Get(':id')
  async getRestaurant(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.findById(id);
  }

  @Put(':id')
  async updateRestaurant(
    @Param('id')
    id: string,
    @Body()
    restaurant: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.updateById(id, restaurant);
  }

  @Put(':id')
  async deleteRestaurant(
    @Param('id')
    id: string,
  ): Promise<Restaurant> {
    return this.restaurantService.deleteById(id);
  }
}
